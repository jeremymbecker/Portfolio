import * as React from "https://cdn.skypack.dev/react@17.0.1";
import './AudioVisualizer.css'

class AV extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playlist: [],
            playlistLength: 0,
            currentSongIndex: null,
            playing: false,
            songStarted: false,
            volume: 100
        };
        this.handleUpload = this.handleUpload.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.seekTo = this.seekTo.bind(this);
        this.seekUpdate = this.seekUpdate.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.playSong = this.playSong.bind(this);
        this.pauseSong = this.pauseSong.bind(this);
        this.next = this.next.bind(this);
        this.skip = this.skip.bind(this);
        this.previousSong = this.previousSong.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.repeat = this.repeat.bind(this);
        this.songEnded = false;
    }

    componentDidMount(){
        document.getElementById("canvas1").width = window.innerWidth;
        document.getElementById("canvas1").height = window.innerHeight;
    }

    handleUpload(e){
        const song = {
            name: "",
            src: ""
        };

        const files = e.target.files[0];
        console.log(files);
        
        //const jsmediatags = window.jsmediatags;
        //let songTitle = ""
        /*jsmediatags.read(files, {
            onSuccess: function(tag) {
                // Array buffer to base64
                console.log(tag.tags);
               // const data = tag.tags.picture.data;
               // const format = tag.tags.picture.format;
               // let base64String = "";
                //for (let i = 0; i < data.length; i++) {
               //     base64String += String.fromCharCode(data[i]);
               // }
                // Output media tags
                //document.querySelector("#cover").style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;
              
                songTitle = tag.tags.title;
                //document.querySelector("#artist").textContent = tag.tags.artist;
                //document.querySelector("#album").textContent = tag.tags.album;
                //document.querySelector("#genre").textContent = tag.tags.genre;
            },
            onError: function(error) {
                console.log(error);
            }
        });
        */  
        song.name = files.name;
        song.src = URL.createObjectURL(files);
        var list = document.getElementById("playlist");
        var newSong = document.createElement("option");
        newSong.text = song.name;
        newSong.value = this.state.playlistLength;
        list.add(newSong);
        this.state.playlist.push(song);
        this.setState({
            playlistLength: this.state.playlistLength + 1,
            currentSongIndex: 0
        });
    }

    handleSave(e){
        // code not in use currently
        //  if(this.state.playlist.length === 0){
        //      return;
        //  }
       // let fs = require('fs');

       // const file = fs.createWriteStream('MyPlaylist.txt');

        //  file.on('error', (err) => {
        //      console.log("Error while trying to write to file.");
        //  });

       // this.state.playlist.forEach((v) => {
       //     file.write(v.join(', ') + '\n');
       // });

        //  file.end();
        const element = document.createElement("a");

        const file = new Blob([this.state.playlist], {
            type: "text/plain;charset=utf-8"
        });
        console.log(file);
        element.href = URL.createObjectURL(file);

        element.download = "MyPlaylist.txt";

        document.body.appendChild(element);

        element.click();
    }

    handleChange(e){
        document.getElementById("audio1").src = this.state.playlist[e.target.value].src;
        document.getElementById("audio1").load();
        this.setState({
            currentSongIndex: parseInt(e.target.value),
            playing: false,
            songStarted: false
        });
        this.playSong();
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
            console.log(seekSlider.value);
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
        let audioCtx = new AudioContext();
        let audioSource;
        let analyser;

        const canvas = document.getElementById("canvas1");
        const ctx = canvas.getContext("2d");
        
        const audio1 = document.getElementById("audio1");
        if(audio1.src === ""){
            audio1.src = this.state.playlist[0].src;
            audio1.load();
            document.getElementById('playpause').classList.remove("fa-circle-play");
            document.getElementById('playpause').classList.add("fa-circle-pause");
            this.setState({
                currentSongIndex: 0,
                playing: true,
                songStarted: true
            });
            audio1.play();
        }
        else{
            //if paused
            if(document.getElementById("playpause").classList[3] === "fa-circle-play"){
                this.songEnded = false;
                document.getElementById('playpause').classList.remove("fa-circle-play");
                document.getElementById('playpause').classList.add("fa-circle-pause");
                audio1.play();
            }
            //pausing during playing
            else if(document.getElementById("playpause").classList[3] === "fa-circle-pause" && this.songEnded === false){
                this.pauseSong();
            }
            else if(document.getElementById("playpause").classList[3] === "fa-circle-pause" && this.songEnded === true){
                this.songEnded = false;
                audio1.play();
            }
        }
        
        audioSource = audioCtx.createMediaElementSource(audio1);
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
                //console.log(barHeight);
                //const red = 200;
                //const green = 50;
                //const blue = 0;
                //console.log(red + " " + green + " " + blue);
                var grd = ctx.createLinearGradient(0, 200, 0, 550);
              //  grd.addColorStop(0.2, '#F9C449' );
              //  grd.addColorStop(0.9, '#F04393');
              //  grd.addColorStop(0, '#08203C');
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
                //grd.addColorStop(1, '#ffaf7b')
                ctx.fillStyle = grd;
                //ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
                ctx.fillRect(x, ((canvas.height-barHeight) - 330) / 1.4, barWidth, barHeight);
                
                x += barWidth;
            }
        }
        animate();
    }

    pauseSong(){
        console.log('paused');
        document.getElementById("audio1").pause();
        document.getElementById('playpause').classList.remove("fa-circle-pause");
        document.getElementById('playpause').classList.add("fa-circle-play");
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
            this.playSong();
        } 
        else{
            this.setState({
                currentSongIndex: this.state.currentSongIndex + 1
            });
            document.getElementById("audio1").src = this.state.playlist[parseInt(this.state.currentSongIndex) + 1].src;
            document.getElementById("audio1").load();
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
            this.playSong();
        } 
        else{
            this.setState({
                currentSongIndex: this.state.currentSongIndex - 1
            });
            document.getElementById("audio1").src = this.state.playlist[parseInt(this.state.currentSongIndex) - 1].src;
            this.playSong();
        }
    }

    shuffle(){
        this.songEnded = true;
        let rand = Math.floor(Math.random() * parseInt(this.state.playlistLength));
        this.setState({
            currentSongIndex: rand
        });
        document.getElementById("audio1").src = this.state.playlist[rand].src;
        this.playSong();
    }

    repeat(){
        this.songEnded = true;
        this.setState({
            currentSongIndex: this.state.currentSongIndex - 1
        });
    }

    render(){
        return(
            <div id="audio-visualizer">
                <canvas id="canvas1"></canvas>
                <audio id="audio1" onTimeUpdate={this.seekUpdate} onSeeking={this.pauseSong} onEnded={this.next}></audio>
                <input type="file" id="fileupload" accept="audio/*" onChange={this.handleUpload} multiple/>
                <select id="playlist" name="your-playlist" defaultValue={"DEFAULT"} placeholder="Choose a song from your library" required onChange={this.handleChange}>
                    <option value="DEFAULT" disabled>Choose a song from your library</option>
                </select>
                <div className="slider_container">
                    <div id="current-time" className="current-time">00:00</div>
                    <input type="range" min="0" max="100" defaultValue="0" step={"any"} id="seek-slider" className="seek_slider" onChange={this.seekTo} />
                    <div id="total-duration" className="total-duration">00:00</div>
                </div>
                <div id="controls">
                    <div id="volume-controls">
                        <i id="volume-icon" className="fa-solid fa-volume-high fa-3x button-cursor-pointer" aria-hidden="true"></i>
                        <input type="range" min="0" max="100" defaultValue={this.state.volume} id="volume-slider" className="volumeSlider" onChange={this.handleVolume} />
                    </div>
                    <div id="play-controls">
                        <i id="previous" className="fa-solid fa-backward fa-3x button-cursor-pointer" aria-hidden="true" onClick={this.previousSong}></i>
                        <i id="playpause" className="fa-regular fa-circle-play fa-5x button-cursor-pointer" aria-hidden="true" onClick={this.playSong}></i>
                        <i id="skip" className="fa-solid fa-forward fa-3x button-cursor-pointer" aria-hidden="true" onClick={this.skip}></i>
                    </div>
                    <div id="extra-controls">
                        <i id="shuffle" className="fa-solid fa-shuffle fa-3x button-cursor-pointer" aria-hidden="true" onClick={this.shuffle}></i>
                        <i id="repeat" className="fa-solid fa-repeat fa-3x button-cursor-pointer" aria-hidden="true" onClick={this.repeat}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default AV;