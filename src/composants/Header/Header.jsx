import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innnerWidth h-container'>
            <img src="./logo-big-dist.png" logo="logo big" width={100}/>
            <div className="flexCenter h-menu">
                <a href="">Batteries</a>
                <a href=''>About Us</a> 
                <button className='button'>
                <a href=''>Contact</a>   
                </button>  
            </div>
        </div>
    </section>
  )
}

export default Header