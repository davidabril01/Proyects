import React, { useState } from 'react';

function ModalArtefact({ closeModal, addButton }) {
  const [productName, setProductName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.trim()) {
      addButton(productName);
      setProductName('');
    }
  };

  return (
    <div style={modalStyle}>
      <h2>Nombre del Producto?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
          placeholder="Introduce el nombre"
        />
        <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
          Agregar
        </button>
        <button type="button" onClick={closeModal} style={{ padding: '10px 20px', marginLeft: '10px' }}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(9, 81, 85)',
  padding: '20px',
  border: '1px solid #ccc',
  boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
  zIndex: 1000,
};

export default ModalArtefact;
