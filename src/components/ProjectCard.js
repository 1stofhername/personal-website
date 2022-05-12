import Video from "./Video";
import { v4 as uuid } from 'uuid';
import videoIcon from "../assets/icons/youtube.svg";

export default function ProjectCard ({ title, img, links }){
// console.log(links)

    return (
        <div className='project-card'>
            <h1 className='sub-title-2'>{title}</h1>
            <span className="image-container">
            <img className="project-image" src={img}/>
            </span>
            <div className ="button-container">
                {links.map(link=>{
                    let linkType;
                    let url;
                    if(link.video){
                        url=link.video;
                        linkType="Walkthrough";
                    } else if (link.demo) {
                        url=link.demo;
                        linkType="Live demo"
                    } else if (link.readme) {
                        url=link.readme;
                        linkType="Read more"
                    }
                    return (
                        <button key={uuid()} className="project-button" onClick={()=> window.open(url, "_blank")}>{linkType==="Walkthrough"?<img id="video-icon" src={videoIcon}/>:null}{linkType}</button>
                    )
                })
                }
            </div>
        </div>
    )
}