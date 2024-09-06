import { BackgroundImage, Button } from '@mantine/core'
import React,{useEffect, useState} from 'react'
import { Info } from 'src/User'
import Typewriter from 'typewriter-effect'
import Particles from './magicui/Particles'
import { NeonGradientCard } from './magicui/neon-gradient-card'


const About = () => {
  return (
    <div
    className="flex relative overflow-hidden justify-around items-center px-8 md:px-16 h-[80vh] font-mono lg-mx:justify-between"
    id="About"
  >
    <Particles
      className="absolute -z-20 inset-0"
      quantity={2000}
      ease={80}
      vx={0.1}
      vy={0.1}
      color="#64FFDA"
      refresh
    />
    <div className="ml-4 md:ml-20 w-full lg:w-3/5 flex flex-col gap-4 md:gap-8 lg-mx:gap-0">
      <div className="text-primaryColor text-xl md:text-3xl lg-mx:text-lg">
        Hi, my name is
      </div>
      <div className="text-white text-2xl md:text-[4.25rem] font-extrabold lg-mx:text-2xl">
        {Info.name}
      </div>
      <div className="text-white text-lg md:text-4xl flex lg-mx:text-xl">
        I'm a&nbsp;
        <span className="text-primaryColor font-semibold">
          <Typewriter
            options={{
              strings: Info.techStack,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <div className="text-textColor text-sm md:text-xl text-justify w-[95%] md:w-[90%] font-semibold my-4 md:my-8 lg-mx:my-0 lg-mx:text-sm text-start">
        {Info.bio}
      </div>
      <Button
        component="a"
        target="_blank"
        href="https://drive.google.com/file/d/1iSy2V0a6CCu93r1h8zOlHFx0GB6ayIEV/view?usp=drive_link"
        className="!text-bgColor !w-fit lg-mx:my-4"
        size="lg"
        color="#64FFDA"
        variant="filled"
      >
        Resume
      </Button>
    </div>
    <div
      className="h-fit flex justify-center items-center rounded-full mr-4 md:mr-14 w-fit"
      id="photo"
    >
      <NeonGradientCard className="w-40 h-40 md:w-[325px] md:h-[325px] items-center justify-center text-center lg-mx:w-64 lg-mx:h-64">
        <img
          src="Sid-Verma-BW.png"
          className="w-full h-full rounded-full"
          alt="Profile"
        />
      </NeonGradientCard>
    </div>
  </div>
  
  )
}

export default About
