import '../css/App.css';
import AboutMe from './AboutMe';
import ExperienceAndEd from './ExperienceAndEd';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <section className="about-me">
          <AboutMe />
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
