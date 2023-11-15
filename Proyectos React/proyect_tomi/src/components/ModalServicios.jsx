import React, { useState } from 'react';
import './ModalServicios.scss';
import TablaSevicios from './TablaServicios';
import ModalAñadirServicio from './ModalAñadirServicio';

const ModalServicios = ({ onClose }) => {
    const [modalAñadirServicioOpen, setModalAñadirServicioOpen] = useState(false);

    const handleOpenModalAñadirServicio = () => {
        setModalAñadirServicioOpen(true);
      };
    
      const handleCloseModalAñadirServicio = () => {
        setModalAñadirServicioOpen(false);
      };
    
    return (
        <div className="modal-servicios" onClick={onClose}>
            <div className='modal-servicios__content' onClick={(e) => e.stopPropagation()}>
                <button className='content__boton-cerrar' onClick={onClose}>
                    <svg className="boton-cerrar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05 7.05 5.636 12 10.586z" />
                    </svg>
                </button>
                <TablaSevicios/>
                <button className='content__boton-añadir' onClick={handleOpenModalAñadirServicio}>Añadir Servicio</button>
                {modalAñadirServicioOpen && <ModalAñadirServicio onClose={handleCloseModalAñadirServicio} />}
            </div>
        </div>
    );
}

export default ModalServicios;