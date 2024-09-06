import React from 'react'
import ProjectCards from './ProjectCards'
import { ProjectInfo } from 'src/User'

const Projects = () => {
    return (
        <div className='px-16 mx-20 font-mono' id='Projects'>
            <h1 className='text-4xl font-bold mb-5 text-center text-white'><span className='text-primaryColor'>02.&nbsp;</span>Projects</h1>
            <div className='flex flex-wrap justify-between gap-4'>
                {ProjectInfo.map((project: any, Index: number) => <ProjectCards key={Index} title={project.title} desc={project.desc} image={project.image} live={project.live} technologies = {project.technologies}/>)}
            </div>
        </div>
    )
}

export default Projects
