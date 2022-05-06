import React from 'react'; 
import { v4 as uuid } from 'uuid';
import { contacts } from './contacts';


export default function JobDetails ({ org, qualities, skills, summary, title }) {

    document.getElementById('experience-sub-title').innerHTML=org;

    contacts.map((contact)=>{console.log(contact)})

    const qualitiesList = qualities.map((quality)=>{
        return <li key={uuid()}>{quality}</li>
    })

    const skillsList = skills.map((skill)=>{
        return <p className="skill-item" key={uuid()}>{skill}</p>
    })

    return (
        <>
            <div className='detail-container'>
                <h2 className='dark-bold-text'>{title}</h2>
                <p className='summary-paragraph'>{summary}</p>
            </div>
            <div className='detail-container' id="skills-container">
                <h2 className="dark-bold-text">Skills</h2>
                <span className='skill-set'>
                    {skillsList}
                </span>
            </div>
            <div className='detail-container'>
                <h2 className='dark-bold-text'>Qualities demonstrated</h2>
                {qualitiesList}
            </div>
        </>
    )

}