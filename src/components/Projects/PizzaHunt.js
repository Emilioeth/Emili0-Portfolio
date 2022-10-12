import React from 'react';
import PizzaHuntBanner from "../../assets/Images/PizzaHunt-banner.png";
import PizzaHuntimg1 from "../../assets/Images/PizzaHunt-img1.png";
import PizzaHuntimg2 from "../../assets/Images/PizzaHunt-img3.png";
import PizzaHuntimg3 from "../../assets/Images/PizzaHunt-img2.png";
import PizzaHuntimgM1 from "../../assets/Images/PizzaHunt-mobile-img1.png";
import PizzaHuntimgM2 from "../../assets/Images/PizzaHunt-mobile-img2.png";
import PizzaHuntimgM3 from "../../assets/Images/PizzaHunt-mobile-img3.png";

function PizzaHunt () {
    return(
                <div className="projects-info3 inactive"> 
        
                    <div className="project-banner info-sections">

                        <div className="banner-title banner-title3">
                            <h1 className="banner-h">
                                    PIZZAHUNT
                            </h1>
                            <p className="banner-p">
                                    2022
                            </p>
                        </div>

                        <img src={PizzaHuntBanner} alt="Project Banner"/>

                    </div>

                    
                    <div className="info-content info-sections">
                        <div className="info-body">

                            <div className="info-about">
                                <h3>
                                    ABOUT
                                </h3>

                                <p>
                                    Pizza Hunt is a social web application where you can share your favorite pizzas and also review what others have shared, you can leave comments and respond to the comments that other users leave on your creations.
                                </p>
                            </div>

                            <div className="info-imgs info3-imgs">
                                <img className="info-img1" src={PizzaHuntimg1} alt="PizzaHunt img 1"/>

                                <img className="info-img2" src={PizzaHuntimg2} alt="PizzaHunt img 2"/>
                            </div>

                        </div>

                            
                        <div className="info-body2">

                            <div className="info-imgs2">
                                <img className="info-img3 info3-img3" src={PizzaHuntimg3} alt="PizzaHunt img 3"/>
                            </div>

                            <div className="info-mobile-imgs info3-mobile-imgs">
                                <img className="mobile-img1" src={PizzaHuntimgM1}  alt="PizzaHunt mobile 1"/>
                                <img className="mobile-img2" src={PizzaHuntimgM2}  alt="PizzaHunt mobile 2"/>
                                <img className="mobile-img3" src={PizzaHuntimgM3} alt="PizzaHunt mobile 3"/>
                            </div>

                        </div>

                        <div className="info-body3">
                            <ul>
                                <li>
                                    <a href="https://lepizza-hunt.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fa-solid fa-globe"></i></a>
                                </li>
                                <li>
                                    <a href="https://github.com/Emilioeth/pizza-hunt" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    );
}

export default PizzaHunt;