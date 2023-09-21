import React from 'react'
import Hero from "../composants/Hero/Hero";
import Companies from "../composants/Companies/Companies";
import Batteries from "../composants/Batteries/Batteries";
import Value from "../composants/Value/Value"
import Contact from "../composants/Contact/Contact"
import Header from "../composants/Header/Header"
import Footer from '../composants/Footer/Footer';

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Companies/>
        <Batteries/>
        <Value/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}

export default Home