import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='f-wrapper'>
      <div className='f-container'>
        <div className='f-contact'>
          <h2>Nous Contacter</h2>
          <p>Chez Big-Dist, nous sommes toujours prêts à vous aider. Que vous ayez des questions sur nos produits, besoin de conseils sur le choix de la batterie adaptée à votre véhicule, ou que vous souhaitiez passer une commande en gros, notre équipe est là pour vous. Nous sommes fiers de notre engagement envers nos clients, et nous mettons tout en œuvre pour vous offrir un service de qualité.</p>
        </div>
        <div className='f-services'>
          <h2>Nos Services</h2>
          <ul>
            <li>Vente de batteries au détail</li>
            <li>Vente de batteries en gros</li>
            <li>Diagnostic de véhicules</li>
            <li>Conseils personnalisés sur les batteries</li>
            <li>Livraison dans tout le Maroc</li>
          </ul>
        </div>
        <div className='f-contact-info'>
          <h2>Coordonnées</h2>
          <p>Téléphone : 06 11 58 67 23</p>
          <p>Adresse : LOTISSEMENT AL IZDIHAR N 303</p>
          <p>Email : bigdist@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;