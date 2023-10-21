import React from 'react';
import './MyPortfolio.css';
import { Link } from "react-router-dom";

class MyPortfolio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lightMode: true
        }

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e){
        if(this.state.lightMode === true){
            document.getElementById("welcome-section").style.backgroundImage = "url(https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/portfolio_background_1800x1200.jpg)"
            document.getElementById("about-section-background").classList.add("about-section-background-dark");
            document.getElementById("about-section-background").classList.remove("about-section-background-light");
            document.querySelector(".about-image-light").classList.add("about-image-dark");
            document.querySelector(".about-image-light").classList.remove("about-image-light");
            document.getElementById("navbar").style.backgroundColor = "rgba(15, 23, 42, 1)";
            document.querySelectorAll(".page-text-color-light").forEach(element => element.classList.add("page-text-color-dark"));
            document.querySelectorAll(".page-text-color-light").forEach(element => element.classList.remove("page-text-color-light"));
            document.querySelectorAll(".background-color-light").forEach(element => element.classList.add("background-color-dark"));
            document.querySelectorAll(".background-color-light").forEach(element => element.classList.remove("background-color-light"));
            document.querySelectorAll(".project-background-color").forEach(element => element.classList.remove("project-background-color"));
            document.querySelectorAll(".project-text-color-light").forEach(element => element.classList.add("project-text-color-dark"));
            document.querySelectorAll(".project-text-color-light").forEach(element => element.classList.remove("project-text-color-light"));
            document.querySelectorAll(".featured-project-light").forEach(element => element.classList.add("featured-project-dark"));
            document.querySelectorAll(".featured-project-light").forEach(element => element.classList.remove("featured-project-light"));
            document.querySelectorAll(".project-text-container-light").forEach(element => element.classList.add("project-text-container-dark"));
            document.querySelectorAll(".project-text-container-light").forEach(element => element.classList.remove("project-text-container-light"));
            document.querySelectorAll(".programming-language-framework-text-container-light").forEach(element => element.classList.add("programming-language-framework-text-container-dark"));
            document.querySelectorAll(".programming-language-framework-text-container-light").forEach(element => element.classList.remove("programming-language-framework-text-container-light"));
            document.querySelector(".education-section-content-container-color-light").classList.add("education-section-content-container-color-dark");
            document.querySelector(".education-section-content-container-color-light").classList.remove("education-section-content-container-color-light");
            document.querySelector(".academics-content-container-light").classList.add("academics-content-container-dark");
            document.querySelector(".academics-content-container-light").classList.remove("academics-content-container-light");
            document.querySelectorAll(".university-text-color-light").forEach(element => element.classList.add("university-text-color-dark"));
            document.querySelectorAll(".university-text-color-light").forEach(element => element.classList.remove("university-text-color-light"));
            this.setState({
                lightMode: false
            });
        
        }
        else{
            document.getElementById("welcome-section").style.backgroundImage = "url(https://wallpaperaccess.com/full/2098638.jpg)";
            document.getElementById("about-section-background").classList.add("about-section-background-light");
            document.getElementById("about-section-background").classList.remove("about-section-background-dark");
            document.querySelector(".about-image-dark").classList.add("about-image-light");
            document.querySelector(".about-image-dark").classList.remove("about-image-dark");
            document.getElementById("navbar").style.backgroundColor = "rgba(235, 235, 235, 1)";
            document.querySelectorAll(".page-text-color-dark").forEach(element => element.classList.add("page-text-color-light"));
            document.querySelectorAll(".page-text-color-dark").forEach(element => element.classList.remove("page-text-color-dark"));
            document.querySelectorAll(".background-color-dark").forEach(element => element.classList.add("background-color-light"));
            document.querySelectorAll(".background-color-dark").forEach(element => element.classList.remove("background-color-dark"));
            document.querySelectorAll(".project").forEach(element => element.classList.add("project-background-color"));
            document.querySelectorAll(".project-text-color-dark").forEach(element => element.classList.add("project-text-color-light"));
            document.querySelectorAll(".project-text-color-dark").forEach(element => element.classList.remove("project-text-color-dark"));
            document.querySelectorAll(".featured-project-dark").forEach(element => element.classList.add("featured-project-light"));
            document.querySelectorAll(".featured-project-dark").forEach(element => element.classList.remove("featured-project-dark"));
            document.querySelectorAll(".project-text-container-dark").forEach(element => element.classList.add("project-text-container-light"));
            document.querySelectorAll(".project-text-container-dark").forEach(element => element.classList.remove("project-text-container-dark"));
            document.querySelectorAll(".programming-language-framework-text-container-dark").forEach(element => element.classList.add("programming-language-framework-text-container-light"));
            document.querySelectorAll(".programming-language-framework-text-container-dark").forEach(element => element.classList.remove("programming-language-framework-text-container-dark"));
            document.querySelector(".education-section-content-container-color-dark").classList.add("education-section-content-container-color-light");
            document.querySelector(".education-section-content-container-color-dark").classList.remove("education-section-content-container-color-dark");
            document.querySelector(".academics-content-container-dark").classList.add("academics-content-container-light");
            document.querySelector(".academics-content-container-dark").classList.remove("academics-content-container-dark");
            document.querySelectorAll(".university-text-color-dark").forEach(element => element.classList.add("university-text-color-light"));
            document.querySelectorAll(".university-text-color-dark").forEach(element => element.classList.remove("university-text-color-dark"));
            this.setState({
                lightMode: true
            });
            
        }
    }

    render(){
        return(
            <div id="my-portfolio">
                <nav id="navbar" className="background-color-light">
                    <div>
                        <p id="portfolio-logo" className="page-text-color-light">Jeremy Becker</p>
                    </div>
                    <ul>
                        <li id="navbar-item"><a href="#welcome-section" className="nav-link-portfolio page-text-color-light">Home</a></li>
                        <li id="navbar-item"><a href="#about-section" className="nav-link-portfolio page-text-color-light">About</a></li>
                        <li id="navbar-item"><a href="#projects-section" className="nav-link-portfolio page-text-color-light">Portfolio</a></li>
                        <li id="navbar-item"><a href="#contact" className="nav-link-portfolio page-text-color-light">Contact</a></li>
                    </ul>
                </nav>
                <section id="welcome-section">
                    <div id="welcome-section-container">
                        <div id="home-image">
                            <img className="face-image" src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/jeremymbecker.jpg" alt="Welcome to my page!"></img>
                        </div>
                        <div id="introduction-text" className="content">
                            <h1 id="introduction-text-header" className="page-text-color-light">Hello, I'm Jeremy Becker</h1>
                            <div className="content__container">
                                <p className="content__container__text page-text-color-light">a </p>
                                <ul className="content__container__list page-text-color-light">
                                    <li className="content__container__list__item">fullstack developer</li>
                                    <li className="content__container__list__item">curiosity seeker</li>
                                    <li className="content__container__list__item">masters pursuer</li>
                                    <li className="content__container__list__item">lifelong learner</li>
                                    <li className="content__container__list__item">quick adapter</li>
                                    <li className="content__container__list__item">college graduate</li>
                                    <li className="content__container__list__item">critical thinker</li>
                                    <li className="content__container__list__item">web developer</li>
                                </ul>
                            </div>
                            <div id="contact-portfolio-group">
                                <a href="#contact" id="Hire-Me">HIRE ME</a>
                                <a href="#projects-section" id="View-Portfolio" className="page-text-color-light">View Portfolio</a>
                                <div id="toggle-container">
                                    <input type="checkbox" id="darkmode-toggle" onChange={this.handleToggle}></input>
                                    <label id="toggle" htmlFor="darkmode-toggle"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="banner-section">
                    <div id="programming-languages-banner" className="banner-style background-color-light">
                        <div id="programming-languages-heading" className="banner-heading page-text-color-light">
                            <h1>
                                Languages 
                            </h1>
                        </div>
                        <div id="programming-languages-banner-container" className="banner-container">
                            <div className="brand-container">
                                <i className="fa-brands fa-js page-text-color-light"></i>
                                <p className="brand-text page-text-color-light">JavaScript</p>
                            </div>
                            <div className="brand-container">
                                <i className="fa-brands fa-html5 page-text-color-light"></i>
                                <p className="brand-text page-text-color-light">HTML</p>
                            </div>
                            <div className="brand-container">
                                <i className="fa-brands fa-css3-alt page-text-color-light"></i>
                                <p className="brand-text page-text-color-light">CSS</p>
                            </div>
                            <div className="brand-container">
                                <i className="fa-brands fa-java page-text-color-light"></i>
                                <p className="brand-text page-text-color-light">Java</p>
                            </div>
                            <div className="brand-container">
                                <i className="fa-brands fa-python page-text-color-light"></i>
                                <p className="brand-text page-text-color-light">Python</p>
                            </div>
                        </div>
                    </div>
                    <div id="libraries-frameworks-banner" className="banner-style background-color-light">
                        <div id="libraries-frameworks-heading" className="banner-heading page-text-color-light">
                            <h1>
                               Libraries and Frameworks 
                            </h1>
                        </div>
                        <div id="libraries-frameworks-banner-container" className="banner-container">
                            <i className="fa-brands fa-node page-text-color-light"></i>
                            <i className="fa-brands fa-npm page-text-color-light"></i>
                            <i className="fa-brands fa-react page-text-color-light"></i>
                            <i className="fa-brands fa-angular page-text-color-light"></i>
                            <i className="fa-brands fa-bootstrap page-text-color-light"></i>
                            <i className="fa-brands fa-github page-text-color-light"></i>
                            <i className="fa-brands fa-aws page-text-color-light"></i>
                        </div>
                    </div>
                </section>
                <section id="about-section">
                    <div id="about-section-background" className="about-section-background-light">
                        <div id="about-section-contents">
                            <p id="about-section-header" className="page-text-color-light">About Me</p>
                            <div id="about-section-container">
                                <div id="about-image-container">
                                    <div id="about-image" className="about-image-light"></div>
                                </div>
                                <div id="about-text-content">
                                    <p id="about-text">
                                        Hello, I'm Jeremy. I am an up and coming software developer. Despite most of my work currently consisting of web development projects, I have experienced and created my fair share of programs in different languages. I love to travel and experience the world as I feel that traveling will allow you to grow as a person as you see and involve yourself within nature and the different cultures that are in those parts of the world. Lastly, I am a life long learner as I want to constantly know new things to better my understanding and shaping of the world as well as pass on my knowledge to future generations in the decades to come.
                                    </p>
                                    <div id="about-info">
                                        <div id="about-info-col1" className="about-info-col-style">
                                            <div>
                                                <h4>Name</h4>
                                                <p>Jeremy Becker</p>
                                            </div>
                                            <div>
                                                <h4>Email</h4>
                                                <p>jeremymichaelbecker97@gmail.com</p>
                                            </div>
                                        </div>
                                        <div id="about-info-col2" className="about-info-col-style">
                                            <div>
                                                <h4>Education</h4>
                                                <p>B.S Computer Science</p>
                                            </div>
                                            <div>
                                                <h4>Employment</h4>
                                                <p>Open</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="education-section" className="background-color-light">
                    <div id="education-section-header" className="page-text-color-light">
                        <p>Education</p>
                    </div>
                    <div id="education-section-content-container" className="education-section-content-container-color-light project-box-shadow">
                        <div className="university-image-container">
                            <img className="university-image" src="https://thepolypost.com/wp-content/uploads/2021/04/19Aerial-SSB8-scaled.jpg" alt="California State Polytechnic University, Pomona"></img>
                        </div>
                        <div className="education-container">
                            <div className="university-name-container">
                                <p className="university-name university-text-color-light">California State Polytechnic University, Pomona</p>
                            </div>
                            <div className="university-years-attended-container">
                                <p className="university-years-attended university-text-color-light">September 2015 - December 2020</p>
                            </div>
                            <div className="university-info-academics-container">
                                <div className="university-info-container">
                                    <p className="university-text university-text-color-light">Pomona, California</p>
                                    <p className="university-text university-text-color-light">B.S. - Computer Science</p>
                                    <p className="university-text university-text-color-light">Dean's List Fall 2016 - Spring 2017</p>
                                    <p className="university-text university-text-color-light">President's List Spring 2017</p>
                                </div>
                                <div className="university-academics-container">
                                    <div className="academics-heading-container">
                                        <p className="university-text university-text-color-light">Classes</p>
                                    </div>
                                    <div className="academics-content-container academics-content-container-light">
                                        <p className="academics-text university-text-color-light">Data Structures and Algorithms, Design and Analysis of Algorithms, Software Engineering, Artificial Intelligence, Computer Architecture, Computer Graphics, Operating Systems, Game Development, Programming Graphical User Interfaces, Concepts of Programming Languages, Formal Languages and Automata, Computer Logic, Symbolic Programming, Numerical Methods</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="projects-section" className="background-color-light">
                    <div id="projects-section-header-container">
                        <p id="projects-section-header" className="page-text-color-light">Projects</p>
                    </div>
                    <div id="projects">
                        <div id="project-1" className="project project-background-color project-box-shadow">
                            <div className="project-image-container">   
                                <Link to="/Tribute-Page" className="nav-link-portfolio">
                                    <img className="project-image" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg" alt="project"/>
                                </Link>
                            </div>
                            <div className="project-description-container">
                                <div className="project-name-container">
                                    <p className="featured-project featured-project-light">Featured project</p>
                                    <p className="project-name project-text-color-light">Tribute Page</p>
                                </div>
                                <div className="project-text-container project-text-container-light project-text-color-light project-box-shadow">
                                    <p>This project was done in pure HTML and CSS. Since then I have remade the project using JavaScript primarily utilizing the ReactJS library. This project is fairly basic as it was the first project I made as part of the responsive web design certification.</p>
                                </div>
                                <div className="programming-language-framework-project-container">
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">HTML</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">CSS</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">JavaScript</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">ReactJS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="project-2" className="project project-background-color project-box-shadow">
                            <div className="project-description-container">
                            <div className="project-name-container">
                                    <p className="featured-project featured-project-light">Featured project</p>
                                    <p className="project-name project-text-color-light">Calculator</p>
                                </div>
                                <div className="project-text-container project-text-container-light project-text-color-light project-box-shadow">
                                    <p>This project was done in JavaScript, HTML and CSS. Since then I have remade the project using the ReactJS library. This project was more complex to create then what it looks like. The reason being that the computation being done was not immediately calculated once you enter another operator. Normally, in typical calculator apps I will type 1+1+ which will immediately output 2 and allow me to enter the next number. In this calculator app, the user is able to build out a long equation that appears in the upper right of the calculator screen. Once the user hits the "=" button will then the computation be computed. </p>
                                </div>
                                <div className="programming-language-framework-project-container">
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">HTML</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">CSS</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">JavaScript</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">ReactJS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-image-container">
                                <Link to="/Calculator" className="nav-link-portfolio">
                                    <img className="project-image" src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Calculator.png" alt="project"/>
                                </Link>
                            </div>
                        </div>
                        <div id="project-3" className="project project-background-color project-box-shadow">
                            <div className="project-image-container"> 
                                <Link to="/Drum-Machine" className="nav-link-portfolio">
                                    <img className="project-image" src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Drum+Machine.png" alt="project"/>
                                </Link>
                            </div>
                            <div className="project-description-container">
                            <div className="project-name-container">
                                    <p className="featured-project featured-project-light">Featured project</p>
                                    <p className="project-name project-text-color-light">Drum Machine</p>
                                </div>
                                <div className="project-text-container project-text-container-light project-text-color-light project-box-shadow">
                                    <p>This project was done in JavaScript, HTML and CSS. Since then I have remade the project using the ReactJS library. In this project I utilized JavaScript grids for the neat arrangement of the drum buttons as well as dabbled in JQuery for the creation of the on-off switch.</p>
                                </div>
                                <div className="programming-language-framework-project-container">
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">HTML</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">CSS</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">JavaScript</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">JQuery</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">ReactJS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="project-4" className="project project-background-color project-box-shadow">
                            <div className="project-description-container">
                            <div className="project-name-container">
                                    <p className="featured-project featured-project-light">Featured project</p>
                                    <p className="project-name project-text-color-light">Product Landing Page</p>
                                </div>
                                <div className="project-text-container project-text-container-light project-text-color-light project-box-shadow">
                                    <p>This project was done in pure HTML and CSS. Since then I have remade the project using JavaScript primarily utilizing the ReactJS library. This project is fairly basic for a product landing page I made as part of the responsive web design certification. Stay tuned though as I am currently in the works to develop a way better landing page using the knowledge of web design and front-end development I have learned since making this project two years ago.</p>
                                </div>
                                <div className="programming-language-framework-project-container">
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">HTML</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">CSS</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">JavaScript</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">ReactJS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-image-container"> 
                                <Link to="/Product-Landing-Page" className="nav-link-portfolio">
                                    <img className="project-image" src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Product+Landing+Page.png" alt="project"/>
                                </Link>
                            </div>
                        </div>
                        <div id="project-5" className="project project-background-color project-box-shadow">
                            <div className="project-image-container"> 
                                <a href="https://X6T6B6MWZCQPCTCM.anvil.app/HPXVYUSFEBAE7QOCDVO7266T" className="nav-link-portfolio" target="_blank" rel="noopener noreferrer">
                                    <img className="project-image" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/Top-25-Most-Beautiful-Daisy-Flowers.jpg" alt="project"/>
                                </a>
                            </div>
                            <div className="project-description-container">
                            <div className="project-name-container">
                                    <p className="featured-project featured-project-light">Featured project</p>
                                    <p className="project-name project-text-color-light">Flower Classifier</p>
                                </div>
                                <div className="project-text-container project-text-container-light project-text-color-light project-box-shadow">
                                    <p>This is an artificial intelligence project that when given an image of a flower will tell you what sort of flower your image is. This A.I. project was trained using over 3000 different images from 60 different species of flowers and has an accuracy rate of 95%. The link will send you to a website where you can provide the app with an image address, however the server hosting the backend is currently offline due to it being hosted on Google Colab. Google Colab only allows users up to an hour of usage if no user input is provided. If you are interested in seeing the project in action please let me know so I can boot up the server. I am currently in the process to attempt to move the code and the training images off Google Colab and onto AWS.</p>
                                </div>
                                <div className="programming-language-framework-project-container">
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">Python</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="project-6" className="project project-background-color project-box-shadow">
                            <div className="project-description-container">
                            <div className="project-name-container">
                                    <p className="featured-project featured-project-light">Featured project</p>
                                    <p className="project-name project-text-color-light">Audio Visualizer</p>
                                </div>
                                <div className="project-text-container project-text-container-light project-text-color-light project-box-shadow">
                                    {/*<p>This project was done using the ReactJS library primarily and showcases the usage of different APIs to allow for music to play and for the music's frequencies to be converted into bytes that can be read, translated, and visualized as 128 bars that are continously varying in height based on the song. It is also user interactive allowing users to upload, play and pause a song as well as change where in the song you want to play and the song's volume. Lastly, songs in the playlist can be replayed, skipped, or be shuffled. More features will be added and the overall look and feel will be updated fairly soon. Please look forward to these upcoming changes. In the meantime take your time and try out my audio visualizer/music player. Enjoy!</p>
                                    */}
                                    <p>This project was developed primarily using the ReactJS library, serving as a captivating showcase of the integration of various APIs. It empowers music enthusiasts to immerse themselves in a dynamic audio experience, where the music's frequencies are transformed into bytes, elegantly visualized as a continuous array of 128 bars, their heights dynamically shifting to the rhythm of the song. The user interface is both intuitive and interactive, allowing users to effortlessly upload, play, pause, adjust playback positions, and control the volume of their chosen tracks. Additionally, the playlist management offers options to replay, skip, or shuffle songs. Stay tuned for upcoming enhancements, including new features and an enhanced visual aesthetic. In the meantime, take your time to explore and enjoy our audio visualizer and music player.</p>
                                </div>
                                <div className="programming-language-framework-project-container">
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">HTML</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">CSS</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">JavaScript</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">ReactJS</p>
                                    </div>
                                    <div className="programming-language-framework-text-container programming-language-framework-text-container-light">
                                        <p className="programming-language-framework-text featured-project-light">Material UI</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-image-container">
                                <Link to="/AV" className="nav-link-portfolio">
                                    <img className="project-image" src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Audio+Visualizer.png" alt="project"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="background-color-light">
                    <h1 className="contact-header page-text-color-light">Contact</h1>
                    <p className="contact-text page-text-color-light">Thank you for viewing my page</p>
                    <p className="contact-text page-text-color-light">I'd love to tell you more about my projects in further detail</p>
                    <p className="contact-text page-text-color-light">Do you have any applications or ideas you want to create in mind?</p>
                    <p className="contact-text page-text-color-light">Feel free to contact me at:</p>
                    <div className="profile-links-and-contacts">
                        <a id="Github-account-link" href="https://github.com/jeremymbecker" target="_blank" rel="noopener noreferrer" className="nav-link-portfolio profile-links-and-contacts-look page-text-color-light">
                            <i className="fa fa-github contacts-icon" aria-hidden="true"></i>
                            GitHub
                        </a>
                        <a id="LinkedIn-account-link" href="https://www.linkedin.com/in/jeremy-becker-268251202/" target="_blank" rel="noopener noreferrer" className="nav-link-portfolio profile-links-and-contacts-look page-text-color-light">
                            <i className="fa fa-linkedin contacts-icon" aria-hidden="true"></i>
                            LinkedIn
                        </a>
                        <a id="Email-account-link" href="mailto: jeremymichaelbecker97@gmail.com" target="_blank" rel="noopener noreferrer" className="nav-link-portfolio profile-links-and-contacts-look page-text-color-light">
                            <i className="fa fa-google contacts-icon" aria-hidden="true"></i>
                            Email Me
                        </a>
                    </div>
                </section>
                <footer className="background-color-light">
                    <p className="project-text-color-light">Designed and developed by Jeremy Becker. ©2023</p>
                </footer>
            </div>
        );
    }
}

export default MyPortfolio;