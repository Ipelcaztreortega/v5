import React from 'react'
import {projects} from '../../data/portfolio';
function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>{project.stack.join(', ')}</p>
                        {/* <a href={project.sourceCode}>Source Code</a>
                        <a href={project.livePreview}>Live Preview</a> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
