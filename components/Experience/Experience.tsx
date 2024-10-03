import React from 'react'
import {experience} from '../../data/portfolio';
function Experience() {
    return (
        <div>
            <h1>Experience</h1>
            <div>
                {experience.map((exp, index) => (
                    <div key={index}>
                        <h3>{exp.title}</h3>
                        <h4>{exp.company}</h4>
                        <p>{exp.description}</p>
                        <p>{exp.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
