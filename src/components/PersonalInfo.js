import me from '../assets/me-pic.png';
import location from '../assets/icons/location.svg'
import linkedin from '../assets/icons/linkedin.svg'
import envelope from '../assets/icons/envelope.svg'
import plane from '../assets/icons/plane.svg'
import github from '../assets/icons/github.svg'

export default function PersonalInfo () {

    function toggleLocationText () {
        const relocate = document.getElementById('relocate');
        const seattle = document.getElementById('seattle');
        const location = document.getElementById('location-icon');
        const plane = document.getElementById('plane-icon');

        relocate.removeAttribute('hidden'); seattle.setAttribute('hidden', true);
        plane.removeAttribute('hidden'); location.setAttribute('hidden', true);
        setTimeout(()=>{
            relocate.setAttribute("hidden", true); seattle.removeAttribute('hidden');
            plane.setAttribute("hidden", true); location.removeAttribute('hidden');
        },3000)
    };

    return (
        <div className="personal-info-container">
                    <div className="title">
                        <h1 className="name">Alicia Parris</h1>
                        <h2 id="fullstack-dev" className="sub-title">Fullstack Developer</h2>
                    </div>

                    <img id="me" src={me} alt="photo of me"/>

                    <div className="contact-info-container">
                        <span id="email">
                            <a href="mailto:aliciaparris@zoho.com">
                                <img className="contact-icons" src={envelope}/>
                            </a>
                        </span>
                        <span id="linkedin">
                            <a href="http://www.linkedin.com/in/idealcandidate" target="blank">
                                <img className="contact-icons" src={linkedin}/>
                            </a>
                        </span>
                        <span id="github">
                            <a href="https://github.com/1stofhername" target="blank">
                                <img className="contact-icons" src={github}/>
                            </a>
                        </span>
                        <span id="location-info">
                            <img id="location-icon" onMouseOver={()=>{toggleLocationText()}} className="contact-icons" src={location}/>
                            <img id="plane-icon" className="contact-icons" src={plane} hidden/>

                            <p id="relocate" className='location-text' hidden>Willing to relocate</p>
                            <p id="seattle" className='location-text' onMouseOver={()=>{toggleLocationText()}}>SEATTLE, WA</p>
                        </span>
                    </div>
                </div>
    )
}