import React,{useState,useEffect} from 'react'
import {Swiper, SwiperSlide,useSwiper} from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css"
import { sliderSettings } from '../../utils/common'
import { Link } from 'react-router-dom';

import "./Batteries.css" 
SwiperCore.use([Autoplay]);

const Batteries = () => {
    const [batteries, setBatteries] = useState([]);
    useEffect(() => {
        
        fetch('http://localhost:8084/batteries') 
          .then((response) => {
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            return response.json();
          })
          .then((data) => {
            setBatteries(data); // Mettez à jour le state avec les données reçues
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération des données :', error);
          });
      }, []);
  return (
    <section className='r-wrapper'>
        <div className='padding innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className="orangeText">Meilleurs choix</span>
                <span className='primaryText'>Liste des Batteries</span>
            </div>
            <Swiper {...sliderSettings} autoplay={{ delay: 3000}}>
                <SliderButtons/>
                {batteries.map((battery, i) => (
                    <SwiperSlide key={i}>
                      <Link to={`/batterydetails/${battery.numB}`}>
                        <div className='flexColStart r-card'>
                            <img src={battery.image} alt="battery" />
                            <span className="secondaryText r-price">
                            
                            
                            </span>

                            <span className='primaryText'>
                                {battery.reference}
                            </span>
                            <span className='primaryText'>{battery.marque}</span>
                        </div>
                        </Link>
                    </SwiperSlide>
            ))}
</Swiper>
        </div>
      
      {/* <ul>
        {batteries.map((battery) => (
          <li key={battery.numB}>
            <h2>{battery.marque}</h2>
            <p>Référence : {battery.reference}</p>
            <p>Prix : {battery.prix} DH</p>
            <p>Garantie : {battery.garantie}</p>
            <img src={battery.image} alt={`Batterie ${battery.marque}`} />
          </li>
        ))}
      </ul> */}
    </section>
  )
}

export default Batteries
const SliderButtons = ()=>{
    const swiper = useSwiper();
    return (
        <div className="r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}