import { Timeline, Text } from '@mantine/core'
import React from 'react'
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots, IconBriefcaseFilled } from '@tabler/icons-react';
import { ExperinceInfo } from 'src/User';

type ExperinceProps = {
    role?: string;
    company?: string;
    date?: string;
    desc?: string;
    skills?: string[]// Made the skills prop optional
};


const TimelineItem = (items: ExperinceProps[]) => {
    return (
        <Timeline>
            {items.map((item: any, index: number) => (
                <Timeline.Item
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-easing='ease-in-sine'
                    key={index}
                    bullet={<IconBriefcaseFilled className='!text-white' size={20}/>}>
                        <div className='border flex flex-col shadow-[0_0_10px_0_#64FFDA50] gap-2 border-primaryColor p-4 rounded-2xl'>
                            <div className='flex gap-2 items-center'>
                                <img className='rounded-lg w-16' src = {`${item.company}.png`} alt="Company" />
                                <div className='flex flex-col'>
                                    <div className='text-white text-2xl font-semibold'>{item.role}</div>
                                    <div className='text-lg font-semibold text-textColor'>{item.company} &#x2022; {item.date}</div>
                                </div>
                            </div>
                            <div className='text-textColor text-justify leading-6'>
                                {item.desc}
                            </div>
                            <div className='text-textColor font-medium text-lg'>
                                <span className='font-semibold text-lg text-white'>Skills: </span>
                                {
                                    item.skills.map((skill: any , index: number) => <span key={index}> &#x2022; {skill}</span>)
                                }
                            </div>
                        </div>
                </Timeline.Item>
            ))}
        </Timeline>
    );
};


const Experience = () => {
    return (
        <div className='px-16 mx-20 font-mono my-5 mb-28' id='Experience'>
            <h1 className='text-4xl font-bold mb-10 text-center text-white'><span className='text-primaryColor'>04.&nbsp;</span>Experince</h1>
            <div>
                <Timeline
                    color='#64FFDA'
                    active={5}
                    bulletSize={30}
                    lineWidth={2}>
                    {TimelineItem(ExperinceInfo)}
                </Timeline>
            </div>
        </div >
    )
}

export default Experience
