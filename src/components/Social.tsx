import React from 'react'
import {IconBrandGithub, IconBrandLinkedin, IconBrandLeetcode,IconBrandGooglePlay} from "@tabler/icons-react"

const Social = () => {

    const socialLinks = [{link: "https://github.com/cseSid", icon:IconBrandGithub},
        {link: "https://www.linkedin.com/in/siddharth-verma-0427b7209/", icon:IconBrandLinkedin},
        {link: "https://leetcode.com/u/i_sid_verma/", icon:IconBrandLeetcode},
        {link: "https://play.google.com/store/apps/details?id=com.mygate.user&hl=en_IN", icon:IconBrandGooglePlay}
    ]

    const socialIcon = socialLinks.map((socialLink) =>{
        return <a href={socialLink.link} target = "_blank" className='font-mono text-sm hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out'>
                 <div data-aos ='fade-up-left' data-aos-duration ='800'> <socialLink.icon className='-rotate-90'/> </div> 
            </a>
    })

    return (
        <div  className='flex items-center text-textColor gap-5  fixed bottom-40 -left-28 rotate-90'>
             {socialIcon}
            <hr className='border-1 rounded-full border-textColor w-40'/>
        </div>
    )
}

export default Social
