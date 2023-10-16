import React, {useState, useEffect} from 'react'
import './Cards.css'
import { useNavigate } from 'react-router-dom';






const Cards = () => {
  

    const navigate = useNavigate();

    const handleCardClick = (batteryId) => {
      // Utilisez la fonction navigate pour naviguer vers la page de détails avec l'ID de la batterie
      navigate(`/battery-details/${batteryId}`);
    };
    
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
    <div className="card-container" onClick={() => handleCardClick(battery.id)}>
      {batteries.map((battery) => (
        <div key={battery.id} className="card" onClick={() => navigate(`/batterydetails/${battery.numB}`)}>
            <p className='primaryText'>Référence : {battery.reference}</p>
            <img src={battery.image} alt={`Batterie ${battery.marque}`} />
            <h3>{battery.marque}</h3>
            <p className='secondaryText'>Prix : {battery.prix} DH</p>
            <p className='orangeText'>Garantie : {battery.garantie}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards