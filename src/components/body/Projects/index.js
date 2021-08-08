import React from 'react'
import { ProjectData } from '../../data/projects'
import ProjectCard from './project-card';
import './project.css'
import Separator from '../../common/social-contact/seperator/index'

const Projects = () => {
    const data = ProjectData;
    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project) => <ProjectCard project={project} />)}

            </div>

        </div>
    )
}

export default Projects
