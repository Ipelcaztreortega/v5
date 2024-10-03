import React from 'react'
import {skills} from '../../data/portfolio';

function Skills() {
    return (
        <div>
            <h1>Skills</h1>
            <div>
                <h2>{skills.languages.title}</h2>
                <ul>
                    {skills.languages.list.map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>{skills.libraries.title}</h2>
                <ul>
                    {skills.libraries.list.map((library, index) => (
                        <li key={index}>{library}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>{skills.tools.title}</h2>
                <ul>
                    {skills.tools.list.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills
