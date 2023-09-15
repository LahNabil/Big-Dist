import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innnerWidth h-container'>
            <img src="./bd.png" logo="logo big" width={100}/>
            <div className="flexCenter h-menu">
                <a href="">Batteries</a>
                <a href=''>Our values</a> 
                <a href=''>Get Started</a> 
                <button className='button'>
                <a href=''>Contact</a>   
                </button>  
            </div>
        </div>
    </section>
  )
}

export default Header