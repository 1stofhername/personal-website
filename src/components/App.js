import React from 'react'; 
import { useEffect, useState } from "react";
import '../css/App.css';
import '../css/mobile.css'
import Landing from './Landing';
import ExperienceAndEd from './ExperienceAndEd';
import Projects from './Projects';


function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className='container'>
        <section className="about-me">
          <Landing />
        </section>
        <section className="ex-and-ed">
          <ExperienceAndEd />
        </section>
        <section className="projects">
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default App;
