import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';


const AdminPanel = () => {
  const [batteries, setBatteries] = useState([]);
  const [editBattery, setEditBattery] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  

  
 
  const handleDelete = (batteryId) => {
    // Display the confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this battery?');
    if (confirmDelete) {
      // Perform a DELETE request to delete the battery with the given ID
      fetch(`http://localhost:8084/batteries/delete/${batteryId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // If the request was successful, you can update the UI accordingly
            // For example, remove the deleted battery from the state
            setBatteries((prevBatteries) =>
              prevBatteries.filter((battery) => battery.numB !== batteryId)
            );
          } else {
            throw new Error('Delete request failed.');
          }
        })
        .catch((error) => {
          console.error('Error deleting battery:', error);
        });
    }
  };
  const handleEdit = (batteryId) => {
    // Find the battery to edit based on batteryId
    const batteryToEdit = batteries.find((battery) => battery.numB === batteryId);

    if (batteryToEdit) {
      setEditBattery(batteryToEdit);
      setIsEditing(true);
    }
  };
  

  const handleSaveEdit = () => {
    if (editBattery) {
      // Send a PUT request to update the battery details
      fetch(`http://localhost:8084/batteries/edit/${editBattery.numB}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editBattery),
      })
        .then((response) => {
          if (response.ok) {
            // Handle a successful response, e.g., close the edit form or modal.
            setEditBattery(null); // Clear the editBattery state
            setIsEditing(false); // Toggle back to admin panel view
          } else {
            throw new Error('Edit request failed.');
          }
        })
        .catch((error) => {
          console.error('Error editing battery:', error);
        });
    }
  };

  // Utilize useEffect to retrieve data from your API
  useEffect(() => {
    // Example fictitious code to simulate data retrieval from your API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8084/batteries');
        if (!response.ok) {
          throw new Error('La requête a échoué.');
        }
        const data = await response.json();
        setBatteries(data); // Update the state with the data
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isEditing ? (
        // Edit form view
        <div className="edit-form">
          <h2>Edit Battery</h2>
          <input
            type="text"
            value={editBattery.marque}
            onChange={(e) => setEditBattery({ ...editBattery, marque: e.target.value })}
          />
          <input
            type="text"
            value={editBattery.reference}
            onChange={(e) => setEditBattery({ ...editBattery, reference: e.target.value })}
          />
          <input
            type="number"
            value={editBattery.prix}
            onChange={(e) => setEditBattery({ ...editBattery, prix: e.target.value })}
          />
          <input
            type="text"
            value={editBattery.image}
            onChange={(e) => setEditBattery({ ...editBattery, image: e.target.value })}
          />
          <input
            type="text"
            value={editBattery.garantie}
            onChange={(e) => setEditBattery({ ...editBattery, garantie: e.target.value })}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        // Admin panel view
        <div>
          <h1 className='primaryText'>Tableau de données de batteries</h1>
            <Link to="/admin/add">
                <Button variant="contained" endIcon={<SendIcon />}>Add Battery</Button>
            </Link>
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Marque</th>
                <th>Référence</th>
                <th>Prix</th>
                <th>Garantie</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {batteries.map((battery) => (
                <tr key={battery.numB}>
                  <td>{battery.numB}</td>
                  <td>{battery.marque}</td>
                  <td>{battery.reference}</td>
                  <td>{battery.prix} DH</td>
                  <td>{battery.image}</td>
                  <td>{battery.garantie}</td>
                  <td>
                    <Button variant="contained" onClick={() => handleEdit(battery.numB)}>Edit</Button>
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(battery.numB)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
       
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
