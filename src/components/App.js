import React from 'react'; 
import { useEffect, useState } from "react";
import '../css/App.css';
import '../css/mobile.css'
import Landing from './Landing';
import JobsContainer from './JobsContainer';
import ProjectsContainer from './ProjectsContainer';


function App() {

  return (
    <div className="App">
      <div className='container'>
        <section className="about-me">
          <Landing />
        </section>
        <section className="ex-and-ed">
          <JobsContainer />
        </section>
        <section className="projects">
          <ProjectsContainer />
        </section>
      </div>
    </div>
  );
}

export default App;
