import './Gestion.scss';
import React, { useState, useEffect } from 'react';
import TablaVentas from './TablaVentas';
import ModalVentas from './ModalVentas';
import ModalProductos from './ModalProductos';
import ModalServicios from './ModalServicios';
import ModalSueldos from './ModalSueldos';

function Gestion() {
  const [modalVentasOpen, setModalVentasOpen] = useState(false);
  const [modalProductosOpen, setModalProductosOpen] = useState(false);
  const [modalSueldosOpen, setModalSueldosOpen] = useState(false);
  const [modalServiciosOpen, setModalServiciosOpen] = useState(false);

  const handleOpenModalVentas = () => {
    setModalVentasOpen(true);
  };

  const handleCloseModalVentas = () => {
    setModalVentasOpen(false);
  };

  const handleOpenModalProductos = () => {
    setModalProductosOpen(true);
  };

  const handleCloseModalProductos = () => {
    setModalProductosOpen(false);
  };

  const handleOpenModalSueldos = () => {
    setModalSueldosOpen(true);
  };

  const handleCloseModalSueldos = () => {
    setModalSueldosOpen(false);
  };

  const handleOpenModalServicios = () => {
    setModalServiciosOpen(true);
  };

  const handleCloseModalServicios = () => {
    setModalServiciosOpen(false);
  };

  return (
    <div className="gestion">
      <div className='gestion__contenedor_botones'>
        <button className='contenedor_botones__ventas' onClick={handleOpenModalVentas}>Ventas</button>
        {modalVentasOpen && <ModalVentas onClose={handleCloseModalVentas} />}
        <button className='contenedor_botones__productos' onClick={handleOpenModalProductos}>Productos</button>
        {modalProductosOpen && <ModalProductos onClose={handleCloseModalProductos} />}
        <button className='contenedor_botones__sueldos' onClick={handleOpenModalSueldos}>Sueldos</button>
        {modalSueldosOpen && <ModalSueldos onClose={handleCloseModalSueldos} />}
        <button className='contenedor_botones__servicios' onClick={handleOpenModalServicios}>Servicios</button>
        {modalServiciosOpen && <ModalServicios onClose={handleCloseModalServicios} />}
      </div>
      <TablaVentas/>
    </div>
  );
}

export default Gestion;