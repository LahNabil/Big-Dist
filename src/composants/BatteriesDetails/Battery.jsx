import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Battery.css'; 

const Battery = () => {
  const { batteryId } = useParams();
  const [battery, setBattery] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8084/batteries/${batteryId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La requête a échoué.');
        }
        return response.json();
      })
      .then((data) => {
        setBattery(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des détails de la batterie :', error);
      });
  }, [batteryId]);

  return (
    <section className="section product" aria-label="product">
      <div className="container">
        <div className="product-slides">
          <div className="slider-banner" data-slider="">
            {battery && (
              <figure className="product-banner">
                <img
                  src={battery.image}
                  width={600}
                  height={600}
                  loading="lazy"
                  alt={`Batterie ${battery.marque}`}
                  className="img-cover"
                />
              </figure>
            )}
          </div>
          {/* Boutons de diapositives ici */}
        </div>
        <div className="product-content">
          {battery && (
            <p className="product-subtitle">{battery.marque}</p>
          )}
          {battery && (
            <h1 className="h1 product-title">{battery.reference}</h1>
          )}
          {battery && (
            <p className="product-text">{battery.description}</p>
          )}
          {battery && (
            <div className="wrapper">
              <span className="price" data-total-price="">
                {battery.prix} DH
              </span>
              {/* Vous devrez gérer la réduction ici en fonction de vos données */}
              <span className="badge">50%</span>
              <del className="del">1500.00 DH</del>
            </div>
            
            )}
            
            <div className="btn-group">
              {/* Boutons de quantité et ajout au panier ici */}
              
            </div>
            <p className='description'>
              La batterie XYZ est une source d'énergie fiable conçue pour répondre à tous vos besoins d'alimentation. Avec une durée de vie exceptionnelle et une performance optimale
              </p>
          </div>

          
        </div>
      </section>
    );
  };

export default Battery;
