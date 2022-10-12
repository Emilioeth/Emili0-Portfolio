import React from 'react';
import NovozcoBanner from "../../assets/Images/Novozco-banner.png";
import Novozcoimg1 from "../../assets/Images/Novozco-img1.png";
import Novozcoimg3 from "../../assets/Images/Novozco-img3.png";
import Novozcoimg2 from "../../assets/Images/Novozco-img2.png";
import NovozcoimgM1 from "../../assets/Images/Novozco-mobile-img1.png";
import NovozcoimgM2 from "../../assets/Images/Novozco-mobile-img2.png";
import NovozcoimgM3 from "../../assets/Images/Novozco-mobile-img3.png";

function Novozco () {
    return(
                <div className="projects-info inactive"> 
        
                    <div className="project-banner info-sections">

                        <div className="banner-title">
                            <h1 className="banner-h">
                                    NOVOZCO
                            </h1>
                            <p className="banner-p">
                                    2022
                            </p>
                        </div>

                        <img src={NovozcoBanner} alt="Project Banner"/>

                    </div>

                    
                    <div className="info-content info-sections">
                        <div className="info-body">

                            <div className="info-about">
                                <h3>
                                        ABOUT
                                </h3>

                                <p>
                                        Novozco Pools is a fast growing pool repair and maintenance business that was looking to digitalize. They were looking to attract more costumers
                                        through an online reach, and also hoping to establish a professional online presence for their business.
                                </p>
                            </div>

                            <div className="info-imgs">
                                <img className="info-img1" src={Novozcoimg1} alt="Novozco img 1"/>

                                <img className="info-img2" src={Novozcoimg2} alt="Novozco img 2"/>
                            </div>

                        </div>

                            
                        <div className="info-body2">

                            <div className="info-imgs2">
                                <img className="info-img3" src={Novozcoimg3} alt="Novozco img 3"/>
                            </div>

                            <div className="info-mobile-imgs">
                                <img className="mobile-img1" src={NovozcoimgM1}  alt="Novozco mobile 1"/>
                                <img className="mobile-img2" src={NovozcoimgM2}  alt="Novozco mobile 2"/>
                                <img className="mobile-img3" src={NovozcoimgM3} alt="Novozco mobile 3"/>
                            </div>

                        </div>

                        <div className="info-body3">
                            <ul>
                                <li>
                                    <a href="https://novozco.com/" target="_blank" rel="noreferrer"><i className="fa-solid fa-globe"></i></a>
                                </li>
                                <li>
                                    <a href="https://github.com/Emilioeth/Novozco" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    );
}

export default Novozco;