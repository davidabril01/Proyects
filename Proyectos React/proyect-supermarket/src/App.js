import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap"

import App__top from './components/AppTop';
import App__header from './components/AppHeader';
import App__content from './components/AppContent';

import "./App.css"

function App() {
  return (
    <div className="App">
      <App__top/>
      <App__header/>
      <App__content/>
    </div>
  );
}

export default App;
