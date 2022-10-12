import React from 'react';
import RunBuddyBanner from "../../assets/Images/RunBuddy-banner.png";
import RunBuddyimg1 from "../../assets/Images/RunBuddy-img1.png";
import RunBuddyimg2 from "../../assets/Images/RunBuddy-img2.png";
import RunBuddyimg3 from "../../assets/Images/RunBuddy-img3.png";
import RunBuddyimgM1 from "../../assets/Images/RunBuddy-mobile-img1.png";
import RunBuddyimgM2 from "../../assets/Images/RunBuddy-mobile-img2.png";
import RunBuddyimgM3 from "../../assets/Images/RunBuddy-mobile-img3.png";

function RunBuddy () {
    return(
                <div className="projects-info2 inactive"> 
        
                    <div className="project-banner info-sections">

                        <div className="banner-title banner-title2">
                            <h1 className="banner-h">
                                    RUN BUDDY
                            </h1>
                            <p className="banner-p">
                                    2022
                            </p>
                        </div>

                        <img src={RunBuddyBanner} alt="Project Banner"/>

                    </div>

                    
                    <div className="info-content info-sections">
                        <div className="info-body">

                            <div className="info-about">
                                <h3>
                                    ABOUT
                                </h3>

                                <p>
                                    Run Buddy is a fitness & cardio business template website built by me, made specifically for digital fitness businesses but can be customized for anything, free to use under the MIT License.
                                </p>
                            </div>

                            <div className="info-imgs info2-imgs">
                                <img className="info-img1" src={RunBuddyimg1} alt="RunBuddy img 1"/>

                                <img className="info-img2" src={RunBuddyimg2} alt="RunBuddy img 2"/>
                            </div>

                        </div>

                            
                        <div className="info-body2">

                            <div className="info-imgs2">
                                <img className="info-img3 info2-img3" src={RunBuddyimg3} alt="RunBuddy img 3"/>
                            </div>

                            <div className="info-mobile-imgs info2-mobile-imgs">
                                <img className="mobile-img1" src={RunBuddyimgM1}  alt="RunBuddy mobile 1"/>
                                <img className="mobile-img2" src={RunBuddyimgM2}  alt="RunBuddy mobile 2"/>
                                <img className="mobile-img3" src={RunBuddyimgM3} alt="RunBuddy mobile 3"/>
                            </div>

                        </div>

                        <div className="info-body3">
                            <ul>
                                <li>
                                    <a href="https://emilioeth.github.io/Run-Buddy/" target="_blank" rel="noreferrer"><i className="fa-solid fa-globe"></i></a>
                                </li>
                                <li>
                                    <a href="https://github.com/Emilioeth/Run-Buddy" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    );
}

export default RunBuddy;