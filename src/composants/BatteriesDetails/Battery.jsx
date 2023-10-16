
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div className='wrapper'>
        <div flexColCenter paddings innerWidth properties-container>
        {battery ? (
        <div>
          <h2>Détails de la batterie</h2>
          <p>Marque : {battery.marque}</p>
          <p>Référence : {battery.reference}</p>
          <p>Prix : {battery.prix} DH</p>
          <p>Garantie : {battery.garantie}</p>
          <img src={battery.image} alt={`Batterie ${battery.marque}`} />
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
        </div>
    </div>
  )
}

export default Battery