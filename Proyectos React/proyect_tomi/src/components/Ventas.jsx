import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './Ventas.scss';

function Ventas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [montoTotal, setMontoTotal] = useState(0);

  const calcularMontoTotal = () => {
    const precios = document.getElementsByClassName('fila__precio');
    let total = 0;
  
    for (let i = 0; i < precios.length; i++) {
      const precio = parseFloat(precios[i].textContent.replace('$', ''));
      total += precio;
    }
  
    setMontoTotal(total.toFixed(2));
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  useEffect(() => {
    calcularMontoTotal();
  }, [modalOpen]);

  return (
    
    <div className="contenedor_ventas">
      <div>
      <div className='contenedor_ventas__tabla'>
        <table className='ventas__tabla'>
          <thead className='tabla__filas_encabezado'>
            <tr className='filas_encabezado__encabezado'>
              <th className='encabezado__titulo'>Índice de Producto</th>
              <th className='encabezado__titulo'>Nombre del Producto</th>
              <th className='encabezado__titulo'>Precio del Producto</th>
            </tr>
          </thead>
          <tbody className='tabla__filas_cuerpo'>
            <tr className='filas_cuerpo__fila'>
              <td className='fila__indice'>1</td>
              <td className='fila__producto'>Producto 1</td>
              <td className='fila__precio'>$10.00</td>
            </tr>
            <tr className='filas_cuerpo__fila'>
              <td className='fila__indice'>2</td>
              <td className='fila__producto'>Producto 2</td>
              <td className='fila__precio'>$15.00</td>
            </tr>
            <tr className='filas_cuerpo__fila'>
              <td className='fila__indice'>3</td>
              <td className='fila__producto'>Producto 3</td>
              <td className='fila__precio'>$20.00</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <div className='contenedor_ventas__total'>
        <h2 className='total__title'>Total</h2>
        <h2 className='total__monto'>$ {montoTotal}</h2>
      </div>
      </div>
      <div className='contenedor_ventas__contenedor_botones'>
        <button className='contenedor_botones__agregar' onClick={handleOpenModal}>+</button>
        {modalOpen && <Modal onClose={handleCloseModal} />}

        <button className='contenedor_botones__finlizar'>Finalizar</button>
      </div>
      
    </div>
  );
}

export default Ventas;