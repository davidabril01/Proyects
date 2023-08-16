import React, { useState, createContext } from 'react';
import './App.css';
import Header from './components/header';
import MenuConvencional from './components/menu-convencional';
import Content from './components/content';

{/*const opcionesMenu = [
  { nombre: 'Articulos', url: '/articulos' },
  { nombre: 'Mapa', url: '/mapa' },
  { nombre: 'Mascotas', url: '/mascotas' },
  { nombre: 'Perfil', url: '/perfil' },
]; */}

function App() {
  return (
    <body>
      <Header></Header>
      <aside>
        <MenuConvencional></MenuConvencional>
      </aside>
      <section>
        <Content></Content>
      </section>{/*
  <footer></footer>*/}
    </body>
  );
}

export default App;
