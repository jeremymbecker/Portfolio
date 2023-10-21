import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from "@mui/material/Collapse"; 
import './AudioVisualizer.css'

class AV extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playlist: [],
            playlistLength: 0,
            currentSongIndex: null,
            playing: false,
            volume: 100,
            hasPlayed: false,
            anchorElement: 'left',
            open: false,
            openPlaylist: false,
            openPresets: false,
            presets: []
        };
        this.handleUpload = this.handleUpload.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePresetChange = this.handlePresetChange.bind(this);
        this.seekTo = this.seekTo.bind(this);
        this.seekUpdate = this.seekUpdate.bind(this);
        this.showVolumeSlider = this.showVolumeSlider.bind(this);
        this.hideVolumeSlider = this.hideVolumeSlider.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.playSong = this.playSong.bind(this);
        this.pauseSong = this.pauseSong.bind(this);
        this.next = this.next.bind(this);
        this.skip = this.skip.bind(this);
        this.previousSong = this.previousSong.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.repeat = this.repeat.bind(this);
        this.initAudioVisualizer = this.initAudioVisualizer.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.presetsOpenClose = this.presetsOpenClose.bind(this);
        this.playlistOpenClose = this.playlistOpenClose.bind(this);
        this.renderPlaylist = this.renderPlaylist.bind(this);
        this.renderPresets = this.renderPresets.bind(this);
        this.songEnded = false;
        
    }

    componentDidMount(){
        document.getElementById("canvas1").width = window.innerWidth;
        document.getElementById("canvas1").height = window.innerHeight;
        let defaultPresets = [
            {
                image: `url('https://images7.alphacoders.com/317/317275.jpg')`,
                name: "Default"
            },
            {
                image: `url('https://wallpapercave.com/wp/wp5144550.jpg')`,
                name: "Retrowave"
            },
            {
                image: `url('https://images.alphacoders.com/735/735031.jpg')`,
                name: "Sunset at Beach"
            },
            {
                image: `url('https://rare-gallery.com/thumbs/4539313-clouds-sky-blue-sun-white.png')`,
                name: "Above the Clouds"
            }
        ];
        this.setState({
            presets: defaultPresets
        });
    }

    handleUpload(e){
        const song = {
            title: "",
            artist: "",
            src: "",
            albumCover: "",
            value: this.state.playlistLength
        };

        var jsmediatags = window.jsmediatags;
        const files = e.target.files[0];
        jsmediatags.read(files, {
            onSuccess: function(tag) {
                // Array buffer to base64
                const data = tag.tags.picture.data;
                const format = tag.tags.picture.format;
                let base64String = "";
                for (let i = 0; i < data.length; i++) {
                    base64String += String.fromCharCode(data[i]);
                }
                // Output media tags
                song.title = tag.tags.title;
                song.artist = tag.tags.artist;
                song.src = URL.createObjectURL(files);
                song.albumCover = `url(data:${format};base64,${window.btoa(base64String)})`;
            },
            onError: function(error) {
                console.log(error);
            }
        });
        this.state.playlist.push(song);
        this.setState({
            playlistLength: this.state.playlistLength + 1,
            currentSongIndex: 0
        });
    }

    handleSave(e){
        const element = document.createElement("a");

        const file = new Blob([this.state.playlist], {
            type: "text/plain;charset=utf-8"
        });
        element.href = URL.createObjectURL(file);

        element.download = "MyPlaylist.txt";

        document.body.appendChild(element);

        element.click();
    }

    handleChange(e){
        this.songEnded = true;
        let audio1 = document.getElementById('audio1');
        let value = e.target.innerText.substring(0, e.target.innerText.indexOf('.'));
        audio1.src = this.state.playlist[parseInt(value) - 1].src;
        audio1.load();
        this.setState({
            currentSongIndex: parseInt(value - 1),
            playing: false
        });
        document.getElementById("song-title").textContent = this.state.playlist[parseInt(value) - 1].title;
        document.getElementById("song-artist").textContent = this.state.playlist[parseInt(value) - 1].artist;
        document.getElementById("album-cover").style.backgroundImage = this.state.playlist[parseInt(value) - 1].albumCover;
        this.playSong();
    }

    handlePresetChange(e){
        let backgroundAV = document.getElementById("audio-visualizer");
        switch(e.target.innerText){
            case "Retrowave":
                backgroundAV.style.backgroundImage = this.state.presets[1].image;
                break;
            case "Sunset at Beach":
                backgroundAV.style.backgroundImage = this.state.presets[2].image;
                break;
            case "Above the Clouds":
                backgroundAV.style.backgroundImage = this.state.presets[3].image;
                break;
            default:
                backgroundAV.style.backgroundImage = this.state.presets[0].image;
                break;
        }
    }

    seekTo(e){
        let song = document.getElementById("audio1");
        let seekto = song.duration * (e.target.value / 100);
        
        // Set the current track position to the calculated seek position
        song.currentTime = seekto;

        this.seekUpdate();
    }

    seekUpdate(){
        let song = document.getElementById("audio1");
        let seekSlider= document.getElementById("seek-slider");
        let currentSongTime = document.getElementById("current-time");
        let totalSongDuration = document.getElementById("total-duration");

        let seekPosition = 0;
        // Check if the current track duration is a legible number
        if (!isNaN(song.duration)){
            seekPosition = song.currentTime * (100 / song.duration);
            seekSlider.value = seekPosition;
            var color = 'linear-gradient(90deg, rgb(50,30,200)' + seekSlider.value + '%, rgb(251,243,236)' + seekSlider.value + '%)';
            seekSlider.style.background = color;
 
            // Calculate the time left and the total duration
            let currentMinutes = Math.floor(song.currentTime / 60);
            let currentSeconds = Math.floor(song.currentTime - currentMinutes * 60);
            let durationMinutes = Math.floor(song.duration / 60);
            let durationSeconds = Math.floor(song.duration - durationMinutes * 60);
 
            // Add a zero to the single digit time values
            if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
            if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
            if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
            if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
 
            // Display the updated duration
            currentSongTime.textContent = currentMinutes + ":" + currentSeconds;
            totalSongDuration.textContent = durationMinutes + ":" + durationSeconds;
        }
        
    }

    showVolumeSlider(){
        document.getElementById("volume-slider").classList.remove("volume-slider-hidden");
    }

    hideVolumeSlider(){
        document.getElementById("volume-slider").classList.add("volume-slider-hidden");
    }

    handleVolume(){
        let song = document.getElementById("audio1");
        let volSlider= document.getElementById("volume-slider");
        song.volume = volSlider.value / 100;
        var color = 'linear-gradient(90deg, rgb(168,221,240)' + volSlider.value + '%, rgb(251,243,236)' + volSlider.value + '%)';
        volSlider.style.background = color;
        this.setState({
            volume: volSlider.value
        });

        // Change the volume icon's display
        if(song.volume >= 0.5){
            document.getElementById('volume-icon').classList.remove("fa-volume-low");
            document.getElementById('volume-icon').classList.remove("fa-volume-xmark");
            document.getElementById('volume-icon').classList.add("fa-volume-high");
        }
        else if(song.volume < 0.5 && song.volume > 0){
            document.getElementById('volume-icon').classList.remove("fa-volume-high");
            document.getElementById('volume-icon').classList.remove("fa-volume-xmark");
            document.getElementById('volume-icon').classList.add("fa-volume-low");
        }
        else{
            document.getElementById('volume-icon').classList.remove("fa-volume-high");
            document.getElementById('volume-icon').classList.remove("fa-volume-low");
            document.getElementById('volume-icon').classList.add("fa-volume-xmark");
        }
    }

    playSong(){
        if(this.state.playlistLength === 0){
            return;
        }
        let audio1 = document.getElementById("audio1");

        if(audio1.src === ""){
            audio1.src = this.state.playlist[0].src;
            audio1.load();
            document.getElementById('playpause').classList.remove("fa-play");
            document.getElementById('playpause').classList.add("fa-pause");
            document.getElementById("song-title").textContent = this.state.playlist[0].title;
            document.getElementById("song-artist").textContent = this.state.playlist[0].artist;
            document.getElementById("album-cover").style.backgroundImage = this.state.playlist[0].albumCover;
            this.setState({
                currentSongIndex: 0,
                playing: true,
                hasPlayed: true
            });
            audio1.play();
            this.initAudioVisualizer(audio1);
        }
        else{
            //if paused
            if(document.getElementById("playpause").classList[4] === "fa-play"){
                document.getElementById('playpause').classList.remove("fa-play");
                document.getElementById('playpause').classList.add("fa-pause");
                audio1.play();
                if(this.state.hasPlayed === false){
                    this.initAudioVisualizer(audio1);
                }
                this.setState({
                    playing: true,
                    hasPlayed: true
                });
                
            }
            //pausing during playing
            else if(document.getElementById("playpause").classList[4] === "fa-pause" && this.songEnded === false){
                this.pauseSong();
            }
            else if(document.getElementById("playpause").classList[4] === "fa-pause" && this.songEnded === true){
                this.songEnded = false;
                audio1.play();
            }
        }
    }

    pauseSong(){
        document.getElementById('audio1').pause();
        document.getElementById('playpause').classList.remove("fa-pause");
        document.getElementById('playpause').classList.add("fa-play");
        this.setState({
            playing: false
        })
    }

    initAudioVisualizer(audioElement){
        let audioSource;
        let analyser;
        const canvas = document.getElementById("canvas1");
        const ctx = canvas.getContext("2d");
        let audioCtx = new window.AudioContext();
        audioSource = audioCtx.createMediaElementSource(audioElement);
        analyser = audioCtx.createAnalyser();
        audioSource.connect(analyser);
        analyser.connect(audioCtx.destination);
        analyser.fftSize = 32768;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const barWidth = canvas.width / 512;
        let barHeight;
        let x;
        
        function animate(){
            x = 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            analyser.getByteFrequencyData(dataArray);
            draw(dataArray);
            requestAnimationFrame(animate);
        }

        function draw(data){
            for(let i = 0; i < 512; i++){
                let index = (i + 10) * 10;
                barHeight = data[index] * 2;
               
                var grd = ctx.createLinearGradient(0, 200, 0, 550);
             
                grd.addColorStop(1, '#3B16DE');
                grd.addColorStop(0.97, '#071AD6');
                grd.addColorStop(0.93, '#66209d');
                grd.addColorStop(0.89, '#AF0D49');

                grd.addColorStop(0.85, '#F20A08');
                grd.addColorStop(0.8, '#F22707');
                grd.addColorStop(0.75, '#FF4E15');
                grd.addColorStop(0.7, '#F96A0A');
                grd.addColorStop(0.65, '#F8990B');
                grd.addColorStop(0.6, '#F1E60E');
               
                ctx.fillStyle = grd;
                
                ctx.fillRect(x, ((canvas.height-barHeight) - 330) / 1.4, barWidth, barHeight);
                
                x += barWidth;
            }
        }
        animate();
    }

    next(){
        this.songEnded = true;

        this.seekUpdate();
        if (this.state.currentSongIndex === this.state.playlistLength - 1) {
            this.setState({
                currentSongIndex: 0
             
            });
            document.getElementById("audio1").src = this.state.playlist[0].src;
            document.getElementById("audio1").load();
            document.getElementById("song-title").textContent = this.state.playlist[0].title;
            document.getElementById("song-artist").textContent = this.state.playlist[0].artist;
            document.getElementById("album-cover").style.backgroundImage = this.state.playlist[0].albumCover;
            this.playSong();
        } 
        else{
            this.setState({
                currentSongIndex: this.state.currentSongIndex + 1
            });
            document.getElementById("audio1").src = this.state.playlist[parseInt(this.state.currentSongIndex) + 1].src;
            document.getElementById("audio1").load();
            document.getElementById("song-title").textContent = this.state.playlist[this.state.currentSongIndex + 1].title;
            document.getElementById("song-artist").textContent = this.state.playlist[this.state.currentSongIndex + 1].artist;
            document.getElementById("album-cover").style.backgroundImage = this.state.playlist[this.state.currentSongIndex + 1].albumCover;
            this.playSong();
        }
        
    }

    skip(){
        if(this.state.playlistLength === 0 || document.getElementById("audio1").src === ""){
            return;
        }
        this.next();
    }

    previousSong(){
        if(this.state.playlistLength === 0 || document.getElementById("audio1").src === ""){
            return;
        }

        this.songEnded = true;
        if (this.state.currentSongIndex === 0) {
            this.setState({
                currentSongIndex: this.state.playlistLength - 1
            });
            document.getElementById("audio1").src = this.state.playlist[parseInt(this.state.playlistLength) - 1].src;
            document.getElementById("song-title").textContent = this.state.playlist[parseInt(this.state.playlistLength) - 1].title;
            document.getElementById("song-artist").textContent = this.state.playlist[parseInt(this.state.playlistLength) - 1].artist;
            document.getElementById("album-cover").style.backgroundImage = this.state.playlist[parseInt(this.state.playlistLength) - 1].albumCover;
            this.playSong();
        } 
        else{
            this.setState({
                currentSongIndex: this.state.currentSongIndex - 1
            });
            document.getElementById("audio1").src = this.state.playlist[parseInt(this.state.currentSongIndex) - 1].src;
            document.getElementById("song-title").textContent = this.state.playlist[parseInt(this.state.currentSongIndex) - 1].title;
            document.getElementById("song-artist").textContent = this.state.playlist[parseInt(this.state.currentSongIndex) - 1].artist;
            document.getElementById("album-cover").style.backgroundImage = this.state.playlist[parseInt(this.state.currentSongIndex) - 1].albumCover;
            this.playSong();
        }
    }

    shuffle(){
        if(this.state.playlistLength === 0){
            return;
        }
        this.songEnded = true;
        let rand = Math.floor(Math.random() * parseInt(this.state.playlistLength));
        this.setState({
            currentSongIndex: rand
        });
        document.getElementById("audio1").src = this.state.playlist[rand].src;
        document.getElementById("song-title").textContent = this.state.playlist[rand].title;
        document.getElementById("song-artist").textContent = this.state.playlist[rand].artist;
        document.getElementById("album-cover").style.backgroundImage = this.state.playlist[rand].albumCover;
        this.playSong();
    }

    repeat(){
        this.songEnded = true;
        this.setState({
            currentSongIndex: this.state.currentSongIndex - 1
        });
    }

    openMenu(){
        this.setState({
            open: true
        })
    }

    closeMenu(){
        this.setState({
            open: false
        })
    }

    presetsOpenClose(){
        console.log("Hello")
        if(this.state.openPresets === false){
            this.setState({
                openPresets: true
            });
        }
        else{
            this.setState({
                openPresets: false
            });
        }
    }

    playlistOpenClose(e){
        if(this.state.playlistLength === 0){
            return;
        }
        if(this.state.openPlaylist === false && e.target.tagName === "SPAN"){
            this.setState({
                openPlaylist: true
            });
        }
        else{
            this.setState({
                openPlaylist: false
            });
        }
    }

    renderPlaylist(){
        return this.state.playlist.map(el => {
            return <ListItem key={el.title}><ListItemButton onClick={this.handleChange}><ListItemText primary={(el.value + 1) + ". " + el.title + " - " + el.artist}></ListItemText></ListItemButton></ListItem>
        });
    }

    renderPresets(){
        console.log(this.state.presets);
        return this.state.presets.map(ele => {
            return <ListItem key={ele.name}><ListItemButton onClick={this.handlePresetChange}><ListItemText primary={ele.name}></ListItemText></ListItemButton></ListItem>
        })
    }

    render(){
        return(
            <div id="audio-visualizer">
                <canvas id="canvas1"></canvas>
                <audio id="audio1" onTimeUpdate={this.seekUpdate} onSeeking={this.pauseSong} onEnded={this.next}></audio>
                {/*<input type="file" id="fileupload" placeholder="Choose files" accept="audio/*" onChange={this.handleUpload} multiple/>
                <select id="playlist" name="your-playlist" defaultValue={"DEFAULT"} placeholder="Choose a song from your library" title="Click the dropdown to see your playlist" required onChange={this.handleChange}>
                    <option value="DEFAULT" disabled>Choose a song from your library</option>
        </select>*/}
                {/*
                <input type="file" id="fileupload" placeholder="Choose files" accept="audio/*" onChange={this.handleUpload} multiple/>
                <select id="playlist" name="your-playlist" defaultValue={"DEFAULT"} placeholder="Choose a song from your library" title="Click the dropdown to see your playlist" required onChange={this.handleChange}>
                    <option value="DEFAULT" disabled>Choose a song from your library</option>
                </select>
                <div id="controls-container">
                    <div className="slider_container">
                        <div id="current-time" className="current-time">00:00</div>
                        <input type="range" placeholder="Song time" min="0" max="100" defaultValue="0" step={"any"} id="seek-slider" className="seek_slider" onChange={this.seekTo} />
                        <div id="total-duration" className="total-duration">00:00</div>
                    </div>
                    <div id="controls">
                        <div id="volume-controls">
                            <i id="volume-icon" className="fa-solid fa-volume-high fa-3x button-cursor-pointer" aria-hidden="true"></i>
                            <input type="range" placeholder="volume" min="0" max="100" defaultValue={this.state.volume} id="volume-slider" className="volumeSlider" onChange={this.handleVolume} />
                        </div>
                        <div id="play-controls">
                            <i id="previous" className="fa-solid fa-backward fa-3x button-cursor-pointer" aria-hidden="true" onClick={this.previousSong}></i>
                            <i id="playpause" className="fa-regular fa-5x button-cursor-pointer fa-circle-play" aria-hidden="true" onClick={this.playSong}></i>
                            <i id="skip" className="fa-solid fa-forward fa-3x button-cursor-pointer" aria-hidden="true" onClick={this.skip}></i>
                        </div>
                        <div id="extra-controls">
                            <i id="shuffle" className="fa-solid fa-shuffle fa-3x button-cursor-pointer" aria-hidden="true" onClick={this.shuffle}></i>
                            <i id="repeat" className="fa-solid fa-repeat fa-3x button-cursor-pointer" aria-hidden="true" onClick={this.repeat}></i>
                        </div>
                    </div>
                </div>
                */}
                <div id="album-cover"></div>
                <div id="controls-container">
                    <div id="controls-background">
                        <div className="slider_container">
                            <div id="current-time" className="current-time">00:00</div>
                            <input type="range" placeholder="Song time" min="0" max="100" defaultValue="0" step={"any"} id="seek-slider" className="seek_slider" onChange={this.seekTo} />
                            <div id="total-duration" className="total-duration">00:00</div>
                        </div>
                        <div id="song-info">
                            <p id="song-title">lipsum lorem</p>
                            <p id="song-artist">lipsum lorem</p>
                        </div>
                        <div id="controls">
                            
                            <div id="left-controls">
                                <Button id="basic-button" aria-controls={this.state.open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={this.state.open ? 'true' : undefined} sx={{color: 'black'}} onClick={this.openMenu}>
                                    <i id="dropdown" className="fa-solid fa-bars fa-3x button-cursor-pointer" aria-hidden="true"></i>
                                </Button>
                                <Drawer anchor={this.state.anchorElement} open={this.state.open} onClose={this.closeMenu}>
                                    <Box sx={{ width: 250 }} role="presentation">
                                        <List component='div'>                  
                                            <ListItemButton onClick={this.playlistOpenClose}>
                                                <ListItemText primary='Playlist' />
                                            </ListItemButton>
                                            <Collapse in={this.state.openPlaylist} timeout="auto" unmountOnExit>
                                                <List id="playlist" sx={{overflow: "auto", maxHeight: 250}}>
                                                    {this.renderPlaylist()}
                                                </List>
                                            </Collapse>
                                            <ListItemButton onClick={this.presetsOpenClose}>
                                                <ListItemText primary='Presets' />
                                            </ListItemButton>
                                            <Collapse in={this.state.openPresets} timeout="auto" unmountOnExit>
                                                <List id="presets" sx={{overflow: "auto", maxHeight: 250}}>
                                                    {this.renderPresets()}
                                                </List>
                                            </Collapse>
                                            <Button id="fileuploadButton" component="label" variant="contained">
                                                <input type="file" id="fileupload" accept="audio/*" onChange={this.handleUpload} onClick={this.playlistOpenClose} multiple/>
                                                Add Music File
                                            </Button> 
                                        </List>
                                    </Box>
                                </Drawer>
                            </div>
                            <div id="play-controls">
                                <div id="volume-controls" onMouseEnter={this.showVolumeSlider} onMouseLeave={this.hideVolumeSlider}>
                                    <i id="volume-icon" className="fa-solid fa-volume-high fa-3x button-cursor-pointer" aria-hidden="true"></i>
                                    <input type="range" placeholder="volume" min="0" max="100" defaultValue={this.state.volume} id="volume-slider" className="volumeSlider volume-slider-hidden" onChange={this.handleVolume} />
                                </div>   
                                <i id="previous" className="fa-solid fa-backward fa-3x button-cursor-pointer icon-spacing" aria-hidden="true" onClick={this.previousSong}></i>
                                <i id="playpause" className="fa-solid fa-3x button-cursor-pointer icon-spacing fa-play" aria-hidden="true" onClick={this.playSong}></i>
                                <i id="skip" className="fa-solid fa-forward fa-3x button-cursor-pointer icon-spacing" aria-hidden="true" onClick={this.skip}></i>
                                <i id="shuffle" className="fa-solid fa-shuffle fa-3x button-cursor-pointer icon-spacing-end" aria-hidden="true" onClick={this.shuffle}></i>
                            </div>
                            <div id="right-controls">
                                <i id="repeat" className="fa-solid fa-rotate-right fa-3x button-cursor-pointer" aria-hidden="true" onClick={this.repeat}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AV;