import React, { useState } from 'react';
import './ModalSueldos.scss';
import TablaSueldos from './TablaSueldos';
import ModalAñadirSueldo from './ModalAñadirSueldo';

const ModalSueldos = ({ onClose }) => {
    const [modalAñadirSueldoOpen, setModalAñadirSueldoOpen] = useState(false);

    const handleOpenModalAñadirSueldo = () => {
        setModalAñadirSueldoOpen(true);
    };

    const handleCloseModalAñadirSueldo = () => {
        setModalAñadirSueldoOpen(false);
    };

    return (
        <div className="modal-sueldos" onClick={onClose}>
            <div className='modal-sueldos__content' onClick={(e) => e.stopPropagation()}>
                <button className='content__boton-cerrar' onClick={onClose}>
                    <svg className="boton-cerrar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05 7.05 5.636 12 10.586z" />
                    </svg>
                </button>
                <TablaSueldos />
                <button className='content__boton-añadir' onClick={handleOpenModalAñadirSueldo}>Añadir Sueldo</button>
                {modalAñadirSueldoOpen && <ModalAñadirSueldo onClose={handleCloseModalAñadirSueldo} />}
            </div>
        </div>
    );
}

export default ModalSueldos;