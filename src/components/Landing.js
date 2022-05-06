import React from 'react'; 
import AboutMeDetails from './AboutMeDetails';
import SuperPowers from './SuperPowers';
import PersonalInfo from './PersonalInfo';


export default function Landing () {

    

    return (
        <>
        <div className='landing'>
            <div className='column-one'>
                <PersonalInfo />
            </div>
            <div className="column-two">
                <AboutMeDetails />
                <SuperPowers />
            </div>
            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </>
    )
}