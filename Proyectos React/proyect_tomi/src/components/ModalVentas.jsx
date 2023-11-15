import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModalVentas.scss';
import TablaVentasCompletadas from './TablaVentasCompletadas';

const ModalVentas = ({ onClose }) => {
    const navigate = useNavigate();

  const ClickVentas = () => {
    navigate('/Ventas');
  };
    return (
        <div className="modal-ventas" onClick={onClose}>
            <div className='modal-ventas__content' onClick={(e) => e.stopPropagation()}>
                <button className='content__boton-cerrar' onClick={onClose}>
                    <svg className="boton-cerrar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05 7.05 5.636 12 10.586z" />
                    </svg>
                </button>
                <TablaVentasCompletadas/>
                <button className='content__boton-añadir' onClick={ClickVentas}>Añadir Venta</button>
            </div>
        </div>
    );
}

export default ModalVentas;