import React from 'react';
import ButtonsContainer from './ButtonsContainer';
import "./PagePrincipal.css"

function PagePrincipal() {
  return (
    <div className='principal'>
        <div className='principal__tittle'>Ventas David</div>
        <div><ButtonsContainer /></div>
    </div>
  );
}

export default PagePrincipal;
