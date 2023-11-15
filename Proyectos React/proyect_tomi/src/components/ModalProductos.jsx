import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModalProductos.scss';
import TablaProductos from './TablaProductos';
import ModalAñadirProducto from './ModalAñadirProducto';


const ModalProductos = ({ onClose }) => {
    const [modalAñadirProductoOpen, setModalAñadirProductoOpen] = useState(false);

    const handleOpenModalAñadirProducto = () => {
        setModalAñadirProductoOpen(true);
      };
    
      const handleCloseModalAñadirProducto = () => {
        setModalAñadirProductoOpen(false);
      };
    

    return (
        <div className="modal-productos" onClick={onClose}>
            <div className='modal-productos__content' onClick={(e) => e.stopPropagation()}>
                <button className='content__boton-cerrar' onClick={onClose}>
                    <svg className="boton-cerrar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05 7.05 5.636 12 10.586z" />
                    </svg>
                </button>
                <TablaProductos/>
                <button className='content__boton-añadir' onClick={handleOpenModalAñadirProducto}>Añadir Producto</button>
                {modalAñadirProductoOpen && <ModalAñadirProducto onClose={handleCloseModalAñadirProducto} />}
            </div>
        </div>
    );
}

export default ModalProductos;