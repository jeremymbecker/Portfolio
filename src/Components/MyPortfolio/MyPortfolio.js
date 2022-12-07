import React from 'react';
import './MyPortfolio.css';
import { Link } from "react-router-dom";
import calcPic from "C:/Users/people/Documents/Work/Javascript/Portfolio Website/my-app/src/Images/Calculator.png";
import drumPic from "C:/Users/people/Documents/Work/Javascript/Portfolio Website/my-app/src/Images/Drum Machine.png";
import plpPic from "C:/Users/people/Documents/Work/Javascript/Portfolio Website/my-app/src/Images/Product Landing Page.png";
import avPic from "C:/Users/people/Documents/Work/Javascript/Portfolio Website/my-app/src/Images/Audio Visualizer.png";

class MyPortfolio extends React.Component {
    render(){
        return(
            <div id="my-portfolio">
                <nav id="navbar">
                    <ul>
                        <li id="navbar-item"><a href="#welcome-section" className="nav-link-portfolio">About</a></li>
                        <li id="navbar-item"><a href="#projects" className="nav-link-portfolio">Work</a></li>
                        <li id="navbar-item"><a href="#contact" className="nav-link-portfolio">Contact</a></li>
                    </ul>
                </nav>
                <section id="welcome-section">
                    <h1 className="portfolio-h1">Hello, I am Jeremy Becker</h1>
                    <h2 className="portfolio-h2">a web developer</h2>
                </section>
                <section id="projects">
                    <p id="projects-section-header"><u>These are some of my projects</u></p>
                    <div className="project-grid">
                        <div className="project project-tile">
                            <Link to="/Tribute-Page" className="nav-link-portfolio">
                                <img className="project-image" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg" alt="project"/>
                                <p className="project-tile-description">Tribute Page</p>
                            </Link>
                        </div>
                        <div className="project project-tile">
                            <Link to="/Calculator" className="nav-link-portfolio">
                                <img className="project-image" src={calcPic} alt="project"/>
                                <p className="project-tile-description">Calculator</p>
                            </Link>
                        </div>
                        <div className="project project-tile">
                            <Link to="/Drum-Machine" className="nav-link-portfolio">
                                <img className="project-image" src={drumPic} alt="project"/>
                                <p className="project-tile-description">Drum Machine</p>
                            </Link>
                        </div>
                        <div className="project project-tile">
                            <Link to="/Product-Landing-Page" className="nav-link-portfolio">
                                <img className="project-image" src={plpPic} alt="project"/>
                                <p className="project-tile-description">Product Landing Page</p>
                            </Link>
                        </div>
                        <div className="project project-tile">
                            <a href="https://X6T6B6MWZCQPCTCM.anvil.app/HPXVYUSFEBAE7QOCDVO7266T" className="nav-link-portfolio" target="_blank" rel="noreferrer">
                                <img className="project-image" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/Top-25-Most-Beautiful-Daisy-Flowers.jpg" alt="project"/>
                                <p className="project-tile-description">Flower Classifier</p>
                            </a>
                        </div>
                        <div className="project project-tile">
                            <Link to="/AV" className="nav-link-portfolio">
                                <img className="project-image" src={avPic} alt="project"/>
                                <p className="project-tile-description">Audio Visualizer</p>
                            </Link>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <h1 className="portfolio-h1">Thank you for viewing my page</h1>
                    <h4 className="portfolio-h4">You can find out more about me here</h4>
                    <div className="profile-links-and-contacts">
                        <a id="profile-link" href="https://codepen.io/your-work/" target="_blank" rel="noreferrer" className="nav-link-portfolio profile-links-and-contacts-look">
                            <i className="fa fa-free-code-camp contacts-icon" aria-hidden="true"></i>
                            freeCodeCamp
                        </a>
                        <a id="Github-account-link" href="https://github.com/jeremymbecker" target="_blank" rel="noreferrer" className="nav-link-portfolio profile-links-and-contacts-look">
                            <i className="fa fa-github contacts-icon" aria-hidden="true"></i>
                            GitHub
                        </a>
                        <a id="LinkedIn-account-link" href="https://www.linkedin.com/in/jeremy-becker-268251202/" target="_blank" rel="noreferrer" className="nav-link-portfolio profile-links-and-contacts-look">
                            <i className="fa fa-linkedin contacts-icon" aria-hidden="true"></i>
                            LinkedIn
                        </a>
                        <a id="Email-account-link" href="mailto: jeremymichaelbecker97@gmail.com" target="_blank" rel="noreferrer" className="nav-link-portfolio profile-links-and-contacts-look">
                            <i className="fa fa-google contacts-icon" aria-hidden="true"></i>
                            Email Me
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default MyPortfolio;