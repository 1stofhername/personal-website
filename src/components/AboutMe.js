import React, { useState } from 'react';

export default function AboutMe () {

    return (
        <>
        <div className='column-one'>
            <div className="header">
                <div className="title">
                <h1 className="name">Alicia Parris</h1>
                <h2 className="sub-title">Fullstack Developer</h2>
                <div className="contact-info">
                    <span id="email">
                        <a href="mailto:aliciaparris@zoho.com">
                            <img className="contact-icons" src="https://img.icons8.com/ios/50/f7a325/circled-envelope.png"/>
                        </a>
                    </span>
                    <span id="linkedin">
                        <a href="http://www.linkedin.com/in/idealcandidate" target="blank">
                            <img className="contact-icons" src="https://img.icons8.com/ios/50/f7a325/linkedin-circled--v1.png"/>
                        </a>
                    </span>
                    <span id="github">
                        <a href="https://github.com/1stofhername" target="blank">
                            <img className="contact-icons" src="https://img.icons8.com/ios/50/f7a325/github--v1.png"/>
                        </a>
                    </span>
                    <span id="location-info">
                        <img className="contact-icons" src="https://img.icons8.com/ios/50/f7a325/marker--v1.png"/>
                        <p id="location-text">SEATTLE, WA</p>
                    </span>
                </div>
                </div>
                <div className="details">
                    <p>
                        <span className="bold-text">HELLO!</span> I am a <span className="bold-text">FULLSTACK ENGINEER</span> actively searching for a position with opportunity for learning and growth.
                    </p>
                    <img src="img_avatar.png" alt="Avatar"></img>
                    <p>
                        I am <span className="bold-text">PASSIONATE</span> about building  <span className="bold-text">CREATIVE SOLUTIONS</span> to crack complex problems and bringing my <span className="bold-text">UNIQUE PERSPECTIVE</span> to any teams I am a part of.
                    </p>
                </div>
            </div>
            
        </div>
        {/* <div id="skills">
        <p>JavaScript</p>
        <p>React.js</p>
    </div> */}
        </>
    )
}