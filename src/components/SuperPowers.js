import React from 'react'; 
import postgresIcon from '../assets/icons/postgresql.svg';
import javaScript from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';
import css from '../assets/icons/css3.svg';
import ruby from '../assets/icons/ruby.svg';
import typescript from '../assets/icons/typescript.svg';


export default function SuperPowers () {
    
    return (
<div className="about-paragraph-container">
                <h2 className="sub-title-2">SUPERPOWERS</h2>
                <div className="skill-container">
                    <div id="js-container" className="skill-icon"><img id="javascript" src={javaScript} />JavaScript</div>
                    <div id="react-container" className="skill-icon"><img id="react" src={react} />React.js</div>
                    <div id="typescript-container" className="skill-icon"><img id="typescript" alt="svgImg" src={typescript}/>TypeScript</div>
                    <div id="postgres-container" className="skill-icon"><img id="postgres" src={postgresIcon}/>PostgreSQL</div>
                    <div id="ruby-container" className="skill-icon"><img id="ruby" src={ruby}/>Ruby</div>
                    <div id="css-container" className="skill-icon"><img id="css" src={css}/>CSS</div>
                </div>
            </div>
    )
}