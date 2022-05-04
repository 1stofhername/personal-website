import graduationCap from "../assets/icons/graduation-cap.svg";
import { roles } from './job-data';

export default function ExperienceAndEd () {

    return (
        <div className="column-one-pg2">
            <div id='summary-container'>
                    <p className='education-details'>Pivoting from tech-adjacent roles into a tech-focused role. Click each job entry to see how my past roles have prepared me to be a successful software developer! </p>
            </div>
            <h2 className='sub-title-2'id="experience-sub-title">experience</h2>

                <div className="jobs-section"> 

                {roles.map(role=>{
                    return(
                    <div key={role.title} className="experience-listing">
                        <span className="job-title">
                            {role.ed?<img src={graduationCap} className="grad-cap"/>:null}
                            <p className="role-title">{role.date}  {role.org}</p>
                        </span>
                        <p className='role-details'>{role.title}</p>
                    </div>    
                    )
                })}                 
            </div>  
        </div>
    )
}