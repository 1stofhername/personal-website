import JobDetails from './JobDetails';
import JobListing from './JobListing';
import { useState } from 'react';

import backarrow from '../assets/icons/whitearrow.svg';
import { roles } from './job-data';


export default function JobsContainer () {

    const[selectedJob, setSelectedJob]=useState("");

    function handleJobClick(e){
       setSelectedJob(e.target.id);
    }

    function handleBackClick (){
        document.getElementById('experience-sub-title').innerHTML="experience and education";
        setSelectedJob("");
    }

    return (
        <div className="column-one-pg2">
            
                    {selectedJob? 
                    <div className="nav-container"><img className="back-button" onClick={()=>handleBackClick()} src={backarrow} /></div>
                    :<div id='summary-container'>
                        <p className='education-details' id="exp-summary">Pivoting from tech-adjacent roles into a tech-focused role. Click each entry to see how my past roles have prepared me to be a successful software developer! </p>
                    </div>}
            <h2 className='sub-title'id="experience-sub-title">experience and education</h2>
            <div className="jobs-section">

                {!selectedJob?
                roles.map(role=>{
                    return (
                        <JobListing key={role.title} title={role.title} org={role.org} date={role.date} className="experience-listing" id={role.org} ed={role.ed} handleJobClick={handleJobClick} />
                        )    
                    }
                    )
                    :roles.map((role=>{if(role.org===selectedJob){
                        return(
                        <JobDetails org={role.org} title={role.title} qualities={role.qualities} id={role.org} summary={role.summary} skills={role.skills} />)
                    }}))}
             </div>
        </div>
    )
}