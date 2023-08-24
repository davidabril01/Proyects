import React from 'react';
import "./Aside.css"

function Aside() {
    return (
        <aside className='menu'>
            <nav className='menu__nav'>
                <ul className='nav__option'>
                    <span className="option__icon material-symbols-outlined">person</span><p className='option__text'>Mis datos</p>
                </ul>
                <ul className='nav__option'>
                    <span className="option__icon material-symbols-outlined">credit_card</span><p className='option__text'>Metodos de pago</p>
                </ul>
                <ul className='nav__option'>
                    <span className="option__icon material-symbols-outlined">settings</span><p className='option__text'>Ajustes y configuración</p>
                </ul>
                <ul className='nav__option'>
                    <span className="option__icon material-symbols-outlined">favorite</span><p className='option__text'>Reputación</p>
                </ul>
                <ul className='nav__option'>
                    <span className="option__icon material-symbols-outlined">logout</span><p className='option__text'>Cerrar Sesión</p>
                </ul>
            </nav>
        </aside>
    );
}
export default Aside;