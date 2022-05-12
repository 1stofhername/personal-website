import graduationCap from "../assets/icons/graduation-cap.svg";

export default function JobListing ({ title, org, ed, date, handleJobClick }) {
    return (
        <div key={title} className="experience-listing" id={org} onClick={handleJobClick}>
            <span id={org} className="job-title">
                {ed?<img src={graduationCap} className="grad-cap"/>:null}
                <p id={org} className="role-title">{date}  {org}</p>
            </span>
            <p id={org} className='role-details'>{title}</p>
        </div> 
    )
}