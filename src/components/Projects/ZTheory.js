import React from 'react';
import ZTheoryBanner from "../../assets/Images/Z-theory-banner.png";
import ZTheoryimg1 from "../../assets/Images/Z-Theory-img1.png";
import ZTheoryimg3 from "../../assets/Images/Z-Theory-img3.png";
import ZTheoryimg2 from "../../assets/Images/Z-Theory-img2.png";
import ZTheoryimgM1 from "../../assets/Images/Z-Theory-mobile-img1.png";
import ZTheoryimgM2 from "../../assets/Images/Z-Theory-mobile-img2.png";
import ZTheoryimgM3 from "../../assets/Images/Z-Theory-mobile-img3.png";

function ZTheory () {
    return(
                <div className="projects-info inactive"> 
        
                    <div className="project-banner info-sections">

                        <div className="banner-title">
                            <h1 className="banner-h">
                                    Z-Theory
                            </h1>
                            <p className="banner-p">
                                    2022
                            </p>
                        </div>

                        <img src={ZTheoryBanner} alt="Project Banner"/>

                    </div>

                    
                    <div className="info-content info-sections">
                        <div className="info-body">

                            <div className="info-about">
                                <h3>
                                        ABOUT
                                </h3>

                                <p>
                                    Z-Theory Labs is a web & Block-chain Digitalization Agency based in Los Angeles, CA. They specify in modernizing businesses with unique and eye
                                    catching website designs, as well as aid Web3.0 brands in their BlockChain projects.
                                </p>
                            </div>

                            <div className="info-imgs">

                                <img className="info-img1" src={ZTheoryimg1} alt="ZTheory img 1"/>
                                <img className="info-img2" src={ZTheoryimg2} alt="ZTheory img 2"/>
                            </div>

                        </div>

                            
                        <div className="info-body2">

                            <div className="info-imgs2">
                                <img className="info-img3" src={ZTheoryimg3} alt="ZTheory img 3"/>
                            </div>

                            <div className="info-mobile-imgs">
                                <img className="mobile-img1" src={ZTheoryimgM1}  alt="ZTheory mobile 1"/>
                                <img className="mobile-img2" src={ZTheoryimgM2}  alt="ZTheory mobile 2"/>
                                <img className="mobile-img3" src={ZTheoryimgM3} alt="ZTheory mobile 3"/>
                            </div>

                        </div>

                        <div className="info-body3">
                            <ul>
                                <li>
                                    <a href="https://ztheory.io/" target="_blank" rel="noreferrer"><i className="fa-solid fa-globe"></i></a>
                                </li>
                                <li>
                                    <a href="https://github.com/Emilioeth/Z-Theory" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    );
}

export default ZTheory;