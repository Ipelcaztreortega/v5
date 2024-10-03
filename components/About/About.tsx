import React from 'react'
import {aboutInfo} from '../../data/portfolio';

function About() {
    return (
        <div>
            <div>
                <h1>About Me</h1>
            </div>
            
            <div>
                <p>{aboutInfo.description}</p>
            </div>
            
            <div>
                <p>{aboutInfo.moreInformation}</p>
            </div>
        </div>
    )
}

export default About;
