import React from 'react';
import './ProductLandingPage.css';

class ProductLandingPage extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <div id="product-landing-page">
                <header id="header">
                    <img id="header-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png" alt="original trombones logo" width="325"></img>
                    <nav id="nav-bar">
                        <ul id="product-landing-page-navigation">
                            <li id="product-landing-page-features"><a href="#Features" className="nav-link-product-landing-page">Features</a></li>
                            <li id="product-landing-page-how-it-works"><a href="#How it Works" className="nav-link-product-landing-page">How It Works</a></li>
                            <li id="product-landing-page-pricing"><a href="#Pricing" className="nav-link-product-landing-page">Pricing</a></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <div id="subscriber">
                        <h1 className="product-landing-page-h1">Handcrafted, home-made masterpieces</h1>
                        <form id="form" action="https://www.freecodecamp.com/email-submit">
                            <br/>
                            <label htmlFor="email"><input type="email" id="email" placeholder="Enter your email address" name="email" /></label>
                            <input type="submit" id="submit" value="Get Started" />
                        </form>
                    </div>
                    <div className="container">
                        <section id="Features">
                            <div className="features-display">
                                <div name="icon">
                                    <i className="fa fa-diamond fa-3x icon"></i>
                                </div>
                                <div className="features-description">
                                    <h2 className="product-landing-page-h2">Premium materials</h2>
                                    <p className="paragraph-formatting">Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</p>
                                </div>
                            </div>
                            <div className="features-display">
                                <div name="icon">
                                    <i className="fa fa-truck fa-3x icon"></i>
                                </div>
                                <div className="features-description">
                                    <h2 className="product-landing-page-h2">Fast shipping</h2>
                                    <p className="paragraph-formatting">We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
                                </div>
                            </div>
                            <div className="features-display">
                                <div name="icon">
                                    <i className="fa fa-thumbs-o-up fa-3x icon"></i>
                                </div>
                                <div className="features-description">
                                    <h2 className="product-landing-page-h2">Quality Assurance</h2>
                                    <p className="paragraph-formatting">For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
                                </div>
                            </div> 
                        </section>
                        <section id="How it Works">
                            <iframe id="video" title="Mahler Symphony number 3" src="https://www.youtube.com/embed/Bd_tQEh6xuY" frameBorder="0" allowFullScreen=""></iframe>  
                        </section>
                        <section id="Pricing">
                            <div className="pricing-container">
                                <div className="pricing-top">
                                    <b>TENOR TROMBONE</b>
                                </div>
                                <h3 className="product-landing-page-h3">$600</h3>
                                <ul className="ul-pricing">
                                    <li className="li-pricing">Standard trombone</li>
                                    <br/>
                                    <br/>
                                    <li className="li-pricing">Great for beginners</li>
                                </ul>
                                <input type="submit" id="select" value="Select"/>
                            </div>
                            <div className="pricing-container">
                                <div className="pricing-top">
                                    <b>BASS TROMBONE</b>
                                </div>
                                <h3 className="product-landing-page-h3">$900</h3>
                                <ul className="ul-pricing">
                                    <li className="li-pricing">Larger than the tenor trombone</li>
                                    <br/>
                                    <br/>
                                    <li className="li-pricing">Largest bell in the trombone family</li>
                                </ul>
                                <input type="submit" id="select" value="Select"/>
                            </div>
                            <div className="pricing-container">
                                <div className="pricing-top">
                                    <b>VALVE TROMBONE</b>
                                </div>
                                <h3 className="product-landing-page-h3">$1200</h3>
                                <ul className="ul-pricing">
                                    <li className="li-pricing">Plays similar to the trumpet</li>
                                    <br/>
                                    <br/>
                                    <li className="li-pricing">Great for jazz bands</li>
                                </ul>
                                <input type="submit" id="select" value="Select"/>
                            </div>
                        </section>
                        <footer className="footer-container">
                            <nav id="nav-footer-bar">
                                <ul id="ul-footer">
                                    <li className="li-footer"><a href="#Privacy" className="nav-link-product-landing-page">Privacy</a></li>
                                    <li className="li-footer"><a href="#Terms" className="nav-link-product-landing-page">Terms</a></li>
                                    <li className="li-footer"><a href="#Contact" className="nav-link-product-landing-page">Contact</a></li>
                                </ul>
                                <div className="footer-copyright">Copyright 2016, Original Trombones</div>
                            </nav>
                        </footer>
                    </div>
                </main>
            </div>
        );
    }
}

export default ProductLandingPage;