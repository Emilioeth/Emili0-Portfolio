import React from 'react';
import LogoGif from "../assets/Images/unnamed.gif";
import Projects from './Projects';
import Resume from "../assets/Emilio_Thomas_Resume.pdf"

function Home() {
    return (
    <div className='home-parent'>
        <section className='aboutme-section'>
            <div className='wrapper index-sec'>
                <section className='home section homeId'>
                    <div className='container container-index'>
                        <div className='row container-home'>
                            <div className='home-info padd-15 home-info-pos'>
                                <h3 className='hello'>
                                    Hello, my name is&nbsp;
                                    <span className="name-parent">
                                        <span className="name">E</span>
                                        <span className="name">m</span>
                                        <span className="name">i</span>
                                        <span className="name">l</span>
                                        <span className="name">i</span>
                                        <span className="name">0</span>
                                    </span>
                                </h3>

                                <h3 className="my-profession">
                                    I' m a&nbsp; <span className="typing">W</span>
                                </h3>

                                <p>
                                    Im a Web Developer, UI/UX Designer, Audio Engineer and a Blockchain developer. Mainly focusing on next gen web and brand digitalization, feel free to check my Projects out, and if theres anything I can help you with Reach Out! 
                                </p>
                                
                                <a href={Resume} download="Emili0_Resume.pdf" className="btn btn-hire" target="_blank" rel="noreferrer">
                                    Download CV
                                </a>
                            </div>
                                
                                
                            <div className="home-img padd-15 home-img-pos">
                                <a href="https://opensea.io/assets/ethereum/0xa310425046661c523d98344f7e9d66b32195365d/46641" target="_blank" rel="noreferrer"> 
                                    <img src={LogoGif} alt="digital animated avatar" height="320" width="320px"/> 
                                </a>
                            </div>   
                        </div>
                    </div>

                    <div className="to-projects-wrap">
                        <div className="to-projects">
                            <p className="to-projects-p">
                                Projects <br />
                            </p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <main className='portfolio-section'>

            <span className='about-port'>
                <span className="portfolio-about">A</span>
                <span className="portfolio-about">b</span>
                <span className="portfolio-about">o</span>
                <span className="portfolio-about">u</span>
                <span className="portfolio-about">t</span>
                <span className="portfolio-about"></span>
            </span>

            <div className="projects-section">

                <div className="projects-div">
                    <div className="project-title-section">
                        <div className="project-title inactive indo0">
                            <div className="proj-title-wrap proj1">
                                <h1 className="project-h">
                                    NOVOZCO
                                </h1>
                                <p className="project-p">
                                    2022
                                </p>
                            </div>
                        </div>
                        <div className="project-title indo1">
                            <div className="proj-title-wrap proj2">
                                <h1 className="project-h">
                                    RUN BUDDY
                                </h1>
                                <p className="project-p">
                                    2022
                                </p>
                            </div>
                        </div>
                        <div className="project-title indo2">
                            <div className="proj-title-wrap proj3">
                                <h1 className="project-h">
                                    PIZZA HUNT
                                </h1>
                                <p className="project-p">
                                    2022
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="rgbKineticSlider" className="rgbKineticSlider"></div>

                    <nav>
                        <a href="#1" className="main-nav prev" data-nav="previous"><i className="fa-regular fa-circle"></i></a>
                        <a href="#1" className="main-nav next" data-nav="next"><i className="fa-regular fa-circle"></i></a>
                    </nav>
                </div>

                < Projects />

            </div>

        </main>

    </div>
        



    );
}

export default Home;