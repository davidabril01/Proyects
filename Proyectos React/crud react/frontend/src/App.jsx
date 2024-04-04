import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TaskForm from './components/Formulario';
import Empleados from './components/Empleados';

const App = () => {
  
  return (
    <Container fluid="md" className="App">
      <h1>Aplicación de Tareas</h1>
      <Empleados></Empleados>
    </Container>
  );
};

export default App;
