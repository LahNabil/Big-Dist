import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="padding innerWidth flexCenter hero-container">
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Découvrez la Différence:<br/>
                        Nos Batteries<br/>
                        de Qualité
                    </h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Nous livrons nos batteries de haute qualité dans toutes les villes du Maroc,
                    <br/>
                    du nord au sud, pour répondre à vos besoins en énergie où que vous soyez.</span>
                    <br/>
                    <span className='secondaryText'>Faites de chaque trajet une aventure sans souci avec nos batteries fiables et puissantes.</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="blue" size={25}/>
                    <input type="text" />
                    <button className="button">Search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span className='plus'>+</span>
                        </span>
                        <span className='secondaryText'>
                            Produits premium
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1900} end={2000} duration={4}/>
                            <span className='plus'>+</span>
                        </span>
                        <span className='secondaryText'>
                        Clients satisfaits
                        </span>
                    </div>
                </div>
                
            </div>
            {/* right side */}
            <div className="hero-right">
                <div className="image-container">
                    <img src="./Batterie.jpg" alt="photo-batterie"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero