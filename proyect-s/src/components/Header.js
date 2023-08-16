import React from 'react';
import userimage from "./images/userphoto.png"
import "./Header.css"

function Header() {
  return (
    <div className='home'>
      <header className='home__head'>
        <div className='head__menu-icon'>
          <i className='menu-icon__icon material-symbols-outlined'>menu</i>
        </div>
        <div className='head__searcher'>
          <input className='searcher__input' type='text' placeholder='Buscar servicio'></input>
          <button className='searcher__button material-symbols-outlined'>search</button>
        </div>
        <div className='head__location'>
          <p className='location__text'>Obispo Trejo 542</p>
          <i className='location__icon material-symbols-outlined'>expand_more</i>
        </div>
        <div className='head__user'>
        <div className='head__notifications'>
          <i className='notifications__icon material-symbols-outlined'>notifications</i>
        </div>
          <div className='user__image-container'>
            <img className='image-container__image' src={userimage}></img>
          </div>
          <p className='user__name'>Leandro</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
