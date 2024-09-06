import React from 'react'
import {IconHexagonLetterS} from "@tabler/icons-react"
import { icons } from '@tabler/icons-react'
import Sidebar from './Sidebar'




const links = ["About", "Projects", "Experience", "Skills"];
const navLinks = (col : Boolean) =>{
    return links.map((link,index) => {
        return <a key={link} className={`${col?'flex flex-col ':''}hover:text-primaryColor text-textColor  text-lg font-mono`} href={`#${link}`}>
            <span  className='text-primaryColor'>0{index+1}. </span>{link}
            </a>
    })
}


const Header = () => {
  return (
    <nav className='flex bg-bgColor h-[18vh] px-10 justify-between items-center'>
        <IconHexagonLetterS  className='z-10' size={60} color='#64FFDA' stroke={1.25}/>
        <div className='md:flex gap-8 hidden'>
            {navLinks(false)}
        </div>
        <Sidebar/>
    </nav>
  )
}

export default Header;
export {navLinks};
