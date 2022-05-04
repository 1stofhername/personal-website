import idealistgif from '../assets/gifs/idealist.gif';

export default function Projects () {
    return (
        
        <div className='projects'>
            <div id="idealist" className='project-container'>
                <h1 className='sub-title-2'>Idealist</h1>
                <img className="project-gif" src={idealistgif} />
                <a className="project-link" href="https://idealist-app.herokuapp.com/" target="blank">DEMO</a>
                <a className="project-link" href="https://github.com/1stofhername/deployed-idea-list/blob/main/README.md" target="blank">READ MORE</a>
            </div>
        </div>
    )
}