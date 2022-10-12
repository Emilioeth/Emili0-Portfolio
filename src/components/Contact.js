import React from 'react';

function Contact () {
    return (
        
        <div className="contact-section-parent inactive">
          <div className="contact-title">
            <h1><span className="contact-t">CONTACT ME</span><span className="play-t"> OR PLAY SNAKE</span></h1>

            <span className="contact-title-span">
              <span className="span-contact">C</span>
              <span className="span-contact">O</span>
              <span className="span-contact">N</span>
              <span className="span-contact">T</span>
              <span className="span-contact">A</span>
              <span className="span-contact">C</span>
              <span className="span-contact">T</span>
              <span className="span-contact">&nbsp;</span>
              <span className="span-contact">M</span>
              <span className="span-contact">E</span>
            </span>

          </div>

          <div className="contact-section-wrap">
            <section className="contact-section contactId">
              <ul>
                <li className='li-one'><a href="mailto:web@emili0.com" target="_blank" rel="noreferrer"><span><i className="fa-solid fa-envelope"></i></span>
                  Email
                </a></li>
                <li className='li-two'><a href="https://discordapp.com/users/345388388951654400/" target="_blank" rel="noreferrer"><span><i className="fa-brands fa-discord"></i></span>
                  Discord
                </a></li>
                <li className='li-three'><a href="https://www.instagram.com/emilioeth/" target="_blank" rel="noreferrer"><span><i className="fa-brands fa-instagram"></i></span>
                  Instagram
                </a></li>
                <li className='li-four'><a href="https://twitter.com/Emili0Eth" target="_blank" rel="noreferrer"><span><i className="fa-brands fa-twitter"></i></span>
                  Twitter
                </a></li>
                <li className='li-five'><a href="https://github.com/Emilioeth" target="_blank" rel="noreferrer"><span><i className="fa-brands fa-github"></i></span>
                  GitHub
                </a></li>
                <li className='li-six'><a href="https://www.linkedin.com/in/emilio-thomas-03728822a/" target="_blank" rel="noreferrer"><span><i className="fa-brands fa-linkedin"></i></span>
                  LinkedIn
                </a></li>
              </ul>
            </section>

            <section className="game-section">
              <div className="container-game noselect">
                <div className="wrapper-game">
                  <button id="replay">
                    <i className="fas fa-play"></i>
                    RESTART
                  </button>
                  <div id="canvas">
              
                  </div>
                  <div id="ui">
                    <h2>SCORE
                    </h2>
                    <span id="score">00</span>
                  </div>
                </div>
                <div id="instructions">
                  <h1>SNAKE</h1> <span>Use arrows to move</span>
                </div>
              </div>
            </section>

            <div className="contact-text">
              <h3>
                SEND ME A MESSAGE!
              </h3>
              <p>
                Contact me at any of my social medias with <br/>
                any inquiries, im very responsive to messages,<br/> 
                let me help with your digital project!
                <br/>
                <br/>
                Also let me know you came from my website!<br/>
                and for more efficient interactions make<br/>
                sure you are descriptive in your message<br/>
              <br/> Thank You!
              </p>

            </div>

          </div>
        </div>

    );
}


export default Contact;