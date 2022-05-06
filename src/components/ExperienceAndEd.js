import React from 'react'; 
import JobDetails from './JobDetails';
import { useState } from 'react';
import graduationCap from "../assets/icons/graduation-cap.svg";
import backarrow from '../assets/icons/backarrow.svg';
import { roles } from './job-data';


export default function ExperienceAndEd () {

    const[selectedJob, setSelectedJob]=useState("");

    function handleJobClick(e){
       setSelectedJob(e.target.id);
    }

    return (
        <div className="column-one-pg2">
            <div id='summary-container'>
                    {selectedJob? 
                    <img className="back-button" onClick={()=>{setSelectedJob("")}} src={backarrow} />
                    :<p className='education-details' id="exp-summary">Pivoting from tech-adjacent roles into a tech-focused role. Click each entry to see how my past roles have prepared me to be a successful software developer! </p>}
            </div>
            <h2 className='sub-title'id="experience-sub-title">experience</h2>
            <div className="jobs-section">

                {selectedJob?
                roles.map((role=>{if(role.org===selectedJob){
                    return(
                    <JobDetails org={role.org} title={role.title} details={role.skills} id={role.org} summary={role.summary} />)
                }}))
                :roles.map(role=>{
                    return(
                     
                        <div key={role.title} className="experience-listing" id={role.org} onClick={handleJobClick}>
                            <span id={role.org} className="job-title">
                                {role.ed?<img src={graduationCap} className="grad-cap"/>:null}
                                <p id={role.org} className="role-title">{role.date}  {role.org}</p>
                            </span>
                            <p id={role.org} className='role-details'>{role.title}</p>
                        </div> 
                        
                    )}
                    )}
             </div>
        </div>
    )
}