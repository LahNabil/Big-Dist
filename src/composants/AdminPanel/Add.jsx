import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Add() {
  const [marque, setMarque] = useState('');
  const [reference, setReference] = useState('');
  const [prix, setPrix] = useState('');
  const [garantie, setGarantie] = useState('');
  const [image, setImage] = useState();
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const [successMessage, setSuccessMessage] = useState('');

 

  const handleClick = async (e) => {
    e.preventDefault();
    const battery = { marque, reference, prix, garantie,image };
    console.log(marque,reference,prix,garantie,image);
  //   const formData = new FormData();
  //         formData.append('marque', marque);
  // formData.append('reference', reference);
  // formData.append('prix', prix);
  // formData.append('garantie', garantie);
  // formData.append('image', image);

    try {
      const response = await fetch('http://localhost:8084/batteries/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(battery),
      });

      if (response.ok) {
        const addedBattery = await response.json();
        console.log('New Battery added:', addedBattery);
        setSuccessMessage('Battery added successfully');
        setMarque('');
        setReference('');
        setPrix('');
        setGarantie('');
        setImage('');
      } else {
        throw new Error('Error adding Battery');
      }
    } catch (error) {
      console.error('Error adding Battery:', error);
      setSuccessMessage('Erreur, veuillez remplir tous les champs');
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={paperStyle}>
        <h1 style={{ color: 'blue', fontFamily: 'Arial, sans-serif' }}>Add Battery</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="marque"
            label="Marque de la Batterie"
            variant="outlined"
            fullWidth
            value={marque}
            onChange={(e) => setMarque(e.target.value)}
          />
          <TextField
            id="reference"
            label="Référence de la Batterie"
            variant="outlined"
            fullWidth
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
          <TextField
            id="prix"
            label="Prix de la Batterie"
            variant="outlined"
            fullWidth
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
          <TextField
            id="garantie"
            label="Garantie de la Batterie"
            variant="outlined"
            fullWidth
            value={garantie}
            onChange={(e) => setGarantie(e.target.value)}
          />
          <TextField
            id="image"
            label="image de la Batterie"
            variant="outlined"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
            
            


          <Button variant="contained" onClick={handleClick}>
            Add
          </Button>
          <Link></Link>
          <button className='button'>
                <a href='http://localhost:5173/admin'>Home</a>   
            </button> 
          {successMessage && <p>{successMessage}</p>}
        </Box>
      </Paper>
    </Container>
  );
}
