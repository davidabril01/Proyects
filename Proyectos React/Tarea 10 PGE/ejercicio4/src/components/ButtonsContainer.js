import React, { useEffect, useState } from 'react';
import Button from './Button';
import ModalArtefact from './ModalArtefact';
import "./ButtonsContainer.css"

function ButtonsContainer() {
  const [buttonsData, setButtonsData] = useState([]); // El array empieza vacío
  const [isModalOpen, setModalOpen] = useState(false); // Estado del modal

  // Cargar botones desde localStorage al montar el componente
  useEffect(() => {
    const storedButtons = JSON.parse(localStorage.getItem('buttonsData'));
    if (storedButtons) {
      setButtonsData(storedButtons);
    }
  }, []);

  // Guardar botones en localStorage
  const saveButtonsToLocalStorage = (buttons) => {
    localStorage.setItem('buttonsData', JSON.stringify(buttons));
  };

  // Función para abrir el modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Función para agregar un botón
  const addButton = (productName) => {
    const newButton = {
      width: '150px',
      height: '50px',
      route: `/products/${productName}`, // Asignar la ruta basada en el nombre del producto
      label: productName
    };
    
    const updatedButtons = [...buttonsData, newButton];
    setButtonsData(updatedButtons); // Agrega el nuevo botón al array
    saveButtonsToLocalStorage(updatedButtons); // Guarda los botones en localStorage
    closeModal(); // Cierra el modal después de agregar
  };

  // Función para eliminar un botón específico
  const deleteButton = (index) => {
    const updatedButtons = buttonsData.filter((_, i) => i !== index); // Filtra el botón que queremos eliminar
    setButtonsData(updatedButtons); // Actualiza el estado local
    saveButtonsToLocalStorage(updatedButtons); // Actualiza el localStorage
  };

  return (
    <div className='principal__buttonsContainer'>
      <Button
        width="50px"
        height="50px"
        onClick={openModal}  // Ejecuta openModal al hacer clic
      >
        +
      </Button>

      {buttonsData.map((button, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <div className='buttonsContainer_container'>
          <Button
            width={button.width}
            height={button.height}
            route={button.route} // Aquí pasamos la ruta para redirigir
          >
            {button.label}
          </Button>
          <button className='buttonsContainer__deleteButton' onClick={() => deleteButton(index)} style={{ marginLeft: '10px' }}>
            X
          </button>
          </div>
        </div>
      ))}

      {isModalOpen && (
        <ModalArtefact 
          closeModal={closeModal} 
          addButton={addButton} 
        />
      )}
    </div>
  );
}

export default ButtonsContainer;
