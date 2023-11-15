import React, { useState } from 'react';
import './TablaVentas.scss';

function TablaVentas() {
  const [ventas, setVentas] = useState(15907);
  const [productos, setProductos] = useState(-9063);
  const [sueldos, setSueldos] = useState(-2556);
  const [servicios, setServicios] = useState(-1050);
  const total = ventas + productos + sueldos + servicios;

  const obtenerSigno = (monto) => {
    if (monto > 0) {
      return 'i';
    } else if (monto < 0) {
      return 'e';
    } else {
      return '-';
    }
  };

  return (
    <div className="contenedor__tabla">
      <table className="tabla__ventas">
        <tbody>
          <tr className="tabla__fila">
            <td>Ventas</td>
            <td>{obtenerSigno(ventas)}</td>
            <td>{ventas}</td>
          </tr>
          <tr className="tabla__fila">
            <td>Productos</td>
            <td>{obtenerSigno(productos)}</td>
            <td>{productos}</td>
          </tr>
          <tr className="tabla__fila">
            <td>Sueldos</td>
            <td>{obtenerSigno(sueldos)}</td>
            <td>{sueldos}</td>
          </tr>
          <tr className="tabla__fila">
            <td>Servicios</td>
            <td>{obtenerSigno(servicios)}</td>
            <td>{servicios}</td>
          </tr>
          <tr className="tabla__fila">
            <td>Total</td>
            <td>{obtenerSigno(total)}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaVentas;