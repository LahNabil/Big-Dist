import React from 'react'
import "../composants/AboutUs/AboutUs"
import AboutUs from '../composants/AboutUs/AboutUs'
import Header from '../composants/Header/Header'
import Footer from '../composants/Footer/Footer'

const About = () => {
  return (
    <div>
        <Header/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default About