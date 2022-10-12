import React from 'react';
import designLogo from "../assets/Images/Logo-design.png"

function Nav(props) {

    const {
        setCategoryHome,
        setCategoryServices,
        setCategoryContact
    } = props

    function showHome() {
        
        setCategoryServices(false)
        setCategoryContact(true)
        setCategoryHome(true)


        document.querySelector(".home-parent").classList.remove('inactive')
        document.querySelector(".contact-section-parent").classList.add('inactive')
        document.querySelector('.portfolio-section').style.opacity = '0' 

        setTimeout(() => {
            document.querySelector('.aboutme-section').style.opacity = '1'
            document.querySelector('.aboutme-section').style.transform = 'none'
            document.querySelector(".nav-toggler").style.opacity = '0'

        }, 600);
        

        document.querySelector(".nav-toggler").classList.add('nav-toggler-portfolio')
        document.querySelector(".nav").classList.remove('open')
        document.querySelector(".nav-toggler").classList.remove('open')
        document.querySelector(".logo").classList.remove('fade')
        document.querySelector(".text1").classList.remove('fade')
        document.querySelector(".text2").classList.remove('fade')
        document.querySelector(".text3").classList.remove('fade')
        document.querySelector(".text4").classList.remove('fade')
    }

    function showProjects() {
        
        setCategoryServices(false)
        setCategoryContact(true)
        setCategoryHome(true)


        document.querySelector(".home-parent").classList.remove('inactive')
        document.querySelector(".contact-section-parent").classList.add('inactive')


        document.querySelector(".nav-toggler").classList.add('nav-toggler-portfolio')
        document.querySelector(".nav").classList.remove('open')
        document.querySelector(".nav-toggler").classList.remove('open')
        document.querySelector(".logo").classList.remove('fade')
        document.querySelector(".text1").classList.remove('fade')
        document.querySelector(".text2").classList.remove('fade')
        document.querySelector(".text3").classList.remove('fade')
        document.querySelector(".text4").classList.remove('fade')
    }

    function showServices() {
        
        setCategoryServices(true)
        setCategoryContact(true)
        setCategoryHome(true)

        document.querySelector(".home-parent").classList.add('inactive')
        document.querySelector(".contact-section-parent").classList.add('inactive')

        document.querySelector(".nav-toggler").classList.remove('nav-toggler-portfolio')
        document.querySelector(".nav").classList.remove('open')
        document.querySelector(".nav-toggler").classList.remove('open')
        document.querySelector(".logo").classList.remove('fade')
        document.querySelector(".text1").classList.remove('fade')
        document.querySelector(".text2").classList.remove('fade')
        document.querySelector(".text3").classList.remove('fade')
        document.querySelector(".text4").classList.remove('fade')
    }

    function showContact() {
        
        setCategoryServices(false)
        setCategoryContact(true)
        setCategoryHome(true)

        document.querySelector(".contact-section-parent").classList.remove('inactive')
        document.querySelector(".home-parent").classList.add('inactive')

        document.querySelector(".nav-toggler").classList.remove('nav-toggler-portfolio')
        document.querySelector(".nav").classList.remove('open')
        document.querySelector(".nav-toggler").classList.remove('open')
        document.querySelector(".logo").classList.remove('fade')
        document.querySelector(".text1").classList.remove('fade')
        document.querySelector(".text2").classList.remove('fade')
        document.querySelector(".text3").classList.remove('fade')
        document.querySelector(".text4").classList.remove('fade')
    }


    return (
        <header>
            <div className="logo">
                <a>
                    <img src={designLogo} alt="personal logo" className="logo-img"/>
                </a>
            </div>

            <ul className="nav nav-portfolio">
                <li className="home-li scroll text1" onClick={showHome}>
                    <a> | ABOUT | <span> ABOUT </span> | ABOUT | <span> ABOUT </span> 
                        | ABOUT |<span> ABOUT </span> | ABOUT | <span> ABOUT&nbsp; </span> </a>

                    <a> | ABOUT | <span> ABOUT </span> | ABOUT | <span> ABOUT </span> 
                        | ABOUT |<span> ABOUT </span> | ABOUT | <span> ABOUT&nbsp; </span> </a>
                </li>
                <li className="scroll text2 scroll-projects" onClick={showProjects}>
                    <a> | PROJECTS | <span> PROJECTS </span> | PROJECTS | <span> PROJECTS </span> 
                        | PROJECTS |<span> PROJECTS </span> | PROJECTS | <span> PROJECTS&nbsp; </span> </a>

                    <a> | PROJECTS | <span> PROJECTS </span> | PROJECTS | <span> PROJECTS </span> 
                        | PROJECTS |<span> PROJECTS </span> | PROJECTS | <span> PROJECTS&nbsp; </span> </a>
                </li>
                <li className="scroll text3" onClick={showServices}>
                    <a> | SERVICES | <span> SERVICES </span> | SERVICES | <span> SERVICES </span> 
                        | SERVICES |<span> SERVICES </span> | SERVICES | <span> SERVICES&nbsp; </span> </a>

                    <a> | SERVICES  | <span> SERVICES </span> | SERVICES  | <span> SERVICES </span> 
                        | SERVICES  | <span> SERVICES </span> | SERVICES  | <span> SERVICES&nbsp; </span> </a>
                </li>
                <li className="scroll text2 text4" onClick={showContact}>
                    <a> | CONTACT | <span> CONTACT </span> | CONTACT | <span> CONTACT </span> 
                        | CONTACT |<span> CONTACT </span> | CONTACT | <span> CONTACT&nbsp; </span> </a>

                    <a> | CONTACT | <span> CONTACT </span> | CONTACT | <span> CONTACT </span> 
                        | CONTACT |<span> CONTACT </span> | CONTACT | <span> CONTACT&nbsp; </span> </a>
                </li>
            </ul>
        </header>
    );
}

export default Nav;