import ContactInfo from './ContactInfo';
import me from '../assets/me-pic.png';

export default function PersonalInfo () {

    return (
        <div className="personal-info-container">

                    <div className="title">
                        <h1 className="name">Alicia Parris</h1>
                        <h2 id="fullstack-dev" className="sub-title">Fullstack Developer</h2>
                    </div>

                    <span className='profile-image-container'>
                        <img id="me" src={me} alt="photo of me"/>
                    </span>

                    <ContactInfo />

                </div>
    )
}