import { getElementError } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import me from '../assets/me-pic.png';

export default function Landing () {

    function toggleLocationText () {
        const relocate = document.getElementById('relocate');
        const seattle = document.getElementById('seattle');
        relocate.removeAttribute('hidden'); document.getElementById('seattle').setAttribute('hidden', true);
        setTimeout(()=>{
            relocate.setAttribute("hidden", true); seattle.removeAttribute('hidden');
        },3000)
    };

    return (
        <>
        <div className='column-one'>
            <div className="header">

                <div className="title">
                    <h1 className="name">Alicia Parris</h1>
                    <h2 className="sub-title">Fullstack Developer</h2>
                </div>

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
                        <img onMouseOver={()=>{toggleLocationText()}} className="contact-icons" src="https://img.icons8.com/ios/50/f7a325/marker--v1.png"/>
                        <p id="relocate" className='location-text' hidden>Willing to relocate</p>
                        <p id="seattle" className='location-text' onMouseOver={()=>{toggleLocationText()}}>SEATTLE, WA</p>
                    </span>
                </div>
                <img id="me" src={me} alt="photo of me"/>
            </div>
            <div className="details">
                    <p className='paragraph'>
                        <span className="bold-text">HELLO!</span> I'm a <span className="bold-text">WEB DEVELOPER</span> actively seeking a position with opportunity for <span id="job-attribute" className="job-attributes">GROWTH,</span> <span className="job-attributes" id="job-attribute-2">CHALLENGES, </span>and <span className="job-attributes" id="job-attribute-3">INNOVATION</span>.
                    </p>
            </div>
            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
        </div>
        </div>
        
            </>
    )
}