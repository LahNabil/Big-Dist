import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero">
        <h1>À Propos de Nous</h1>
        <p>Nous sommes votre source fiable de batteries de qualité.</p>
      </section>

      <section className="mission">
        <h2>Notre Mission</h2>
        <p>Nous nous engageons à fournir les meilleures batteries pour répondre à vos besoins.</p>
      </section>

      <section className="values">
        <h2>Nos Valeurs</h2>
        <ul>
          <li>Qualité</li>
          <li>Fiabilité</li>
          <li>Service client exceptionnel</li>
        </ul>
      </section>

      <section className="team">
        <h2>Notre Équipe</h2>
        <p>Nous sommes une équipe de professionnels passionnés par les batteries et prêts à vous conseiller.</p>
      </section>
    </div>
  );
};

export default AboutUs;