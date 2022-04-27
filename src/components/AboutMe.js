import React, { useState } from 'react';

export default function AboutMe () {
    const [locationHover, setLocationHover] = useState(false);

    return (
        <div className="header">
            <div className="title">
            <h1 className="name">Alicia Parris</h1>
            <h2 className="sub-title">Fullstack Developer</h2>
            </div>
            <div className="contact-info">
                <span id="email">
                    <a href="mailto:aliciaparris@zoho.com">
                        <img className="contact-icons" src="https://img.icons8.com/ios/50/FFFFFF/circled-envelope.png"/>
                    </a>
                </span>
                <span id="linkedin">
                    <a href="http://www.linkedin.com/in/idealcandidate" target="blank">
                        <img className="contact-icons" src="https://img.icons8.com/ios/50/FFFFFF/linkedin-circled--v1.png"/>
                    </a>
                </span>
                <span id="github">
                    <a href="https://github.com/1stofhername" target="blank">
                        <img className="contact-icons" src="https://img.icons8.com/ios/50/FFFFFF/github--v1.png"/>
                    </a>
                </span>
                <span id="location-info">
                    <img className="contact-icons" src="https://img.icons8.com/ios/50/FFFFFF/marker--v1.png"/>
                    <p id="location-text">SEATTLE, WA</p>
                </span>
            </div>
            <div className="contact">
                <p>
                    Hello, welcome to my website! I am a fullstack engieer actively searching for a position with opportunity for learning and growth.
                </p>
            </div>
        </div>
    )
}