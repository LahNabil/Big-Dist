import React, { useState } from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const[menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800){
      return{ right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innnerWidth h-container'>
            <Link to='/'>
            <img src="./bd.png" logo="logo big" width={100}/>
            </Link>
            <OutsideClickHandler
            onOutsideClick={()=>{
              setMenuOpened(false)
            }}
            >
            
            <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                
                 <Link to="/batteries">Batteries</Link> 
                 <Link to="/aboutUs">À propos de nous</Link> 
                 <Link to="/contactUs">Contactez-nous</Link> 
                <button className='button'>
                <a href='https://www.facebook.com.com' target='_blank'>Contact</a>   
                </button> 
                 
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={()=> setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>
        </div>
        
    </section>
  )
}

export default Header