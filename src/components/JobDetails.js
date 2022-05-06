import React from 'react'; 
import { v4 as uuid } from 'uuid';
import { contacts } from './contacts';


export default function JobDetails ({ org, title, details, summary }) {

    document.getElementById('experience-sub-title').innerHTML=org;

    contacts.map((contact)=>{console.log(contact)})
    // document.getElementById('exp-summary').setAttribute('hidden', 'true');

    const detail = details.map((skill)=>{
        return <li key={uuid()}>{skill}</li>
    })

    return (
        <>
            <div className='detail-container'>
                <h2 className='dark-bold-text'>{title}</h2>
                <p>{summary}</p>
            </div>
            <div className='detail-container'>
                <h2 className='dark-bold-text'>Skills demonstrated</h2>
                {detail}
            </div>
        </>
    )

}