import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Button.css";

function Button({ width, height, route, children, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route); // Redirige a la ruta proporcionada
    } else if (onClick) {
      onClick(); // Si no hay ruta, ejecuta la función proporcionada (ej. openModal)
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{ width: width, height: height }}
      className='Boton'
    >
      {children}
    </button>
  );
}

export default Button;
