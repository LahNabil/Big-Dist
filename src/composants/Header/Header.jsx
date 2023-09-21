import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innnerWidth h-container'>
            <Link to='/'>
            <img src="./logo-big-dist.png" logo="logo big" width={100}/>
            </Link>
            
            <div className="flexCenter h-menu">
                
                 <Link to="/batteries">Batteries</Link> 
                 <Link to="/aboutUs">À propos de nous</Link> 
                 <Link to="/contactUs">Contactez-nous</Link> 
                <button className='button'>
                <a href=''>Contact</a>   
                </button>  
            </div>
        </div>
    </section>
  )
}

export default Header