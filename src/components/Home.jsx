import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Hero from "./Hero";

const Home = () => {
  return (
    <>
     <Navbar>
        <div className='overflow-x-hidden'>
            <About/>
            <Contact/>
            <Footer/>
            <Education/>
            <Projects/>
            <Skills/>
            <Hero/>
       </div>
     </Navbar>
    </>
  )
}

export default Home