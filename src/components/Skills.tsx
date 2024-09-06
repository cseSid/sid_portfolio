import React from 'react'
import { SkillInfo } from 'src/User'
import SkillCard from './SkillCard'

const Skills = () => {
    return (
        <div className='px-16 mx-20 font-mono my-5' id='Skills'>
            <h1 className='text-4xl font-bold mb-5 text-center text-white'><span className='text-primaryColor'>03.&nbsp;</span>Skills</h1>
           <div className='flex flex-wrap gap-5 justify-between' >{SkillInfo.map((item: any, Index: number) => 
            <SkillCard 
            title = {item.title}
             skill = {item.skills}
             key = {Index}
             isFirst={Index === 0} />)}</div> 
        </div>
    )
}

export default Skills
