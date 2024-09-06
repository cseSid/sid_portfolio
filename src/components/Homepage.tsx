import React, { useEffect, useState } from 'react'
import Header from './Header'
import Mail from './Mail'
import Social from './Social'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Footer from './Footer'
import { Loader } from './Loader'


const Homepage = () => {

  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },5000)
  })

  return (
    <div className={`min-h-[100hv] ${loading ? "flex": ""} items-center overflow-hidden justify-center`}>
    { loading !== true ? <>
      <Header/>
    <About/>
    <Projects/>
    <Skills/>
    <Experience/>
    <Footer/>
    <Mail/>
    <Social/>
    </> :
    <Loader/>
    }
    </div>
  )
}

export default Homepage
