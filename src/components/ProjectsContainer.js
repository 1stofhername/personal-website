import React from 'react'; 
import ProjectCard from './ProjectCard';
import { projectData } from "./projectData";

export default function ProjectsContainer () {
    return (
        <div className='projects-container'>
        <h1 className="name">Projects</h1>
        <div className='cards-container'>
            {projectData.map((project)=>{return <ProjectCard key={project.title} title={project.title} img={project.img} links={project.links} />})}
        </div>
        </div>
    )
}