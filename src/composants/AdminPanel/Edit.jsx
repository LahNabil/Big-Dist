import React, { useState } from 'react';

const Edit = ({ battery, onSave, onCancel }) => {
  const [editedBattery, setEditedBattery] = useState({ ...battery });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBattery({
      ...editedBattery,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Call the onSave function and pass the edited battery data
    onSave(editedBattery);
  };

  return (
    <div>
      <h2>Edit Battery</h2>
      <form>
        <div>
          <label htmlFor="marque">Marque:</label>
          <input
            type="text"
            id="marque"
            name="marque"
            value={editedBattery.marque}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="reference">Référence:</label>
          <input
            type="text"
            id="reference"
            name="reference"
            value={editedBattery.reference}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="prix">Prix (DH):</label>
          <input
            type="number"
            id="prix"
            name="prix"
            value={editedBattery.prix}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="garantie">Garantie:</label>
          <input
            type="text"
            id="garantie"
            name="garantie"
            value={editedBattery.garantie}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
