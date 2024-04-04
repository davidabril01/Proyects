import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import TaskForm from './Formulario'; // Importamos el componente de formulario

const Empleados = () => {
    const [people, setPeople] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const addPerson = (newPerson) => {
        setPeople([...people, newPerson]);
        console.log('Datos enviados:', people);
        setShowForm(false);
    };

    const handleShowForm = () => {
      setShowForm(true);
    };
  
    const handleCancel = () => {
      setShowForm(false);
    };

    return (
        <div>
            <Table striped bordered hover className="Tabla">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Habilidades</th>
                        <th>Designación</th>
                        <th>Dirección</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => (
                        <tr key={index}>
                            <td>{person.nombre}</td>
                            <td>{person.edad}</td>
                            <td>{person.habilidades}</td>
                            <td>{person.designacion}</td>
                            <td>{person.direccion}</td>
                            <td>Acciones</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {!showForm && <button className="btn btn-primary" onClick={handleShowForm}>Mostrar formulario</button>}
        {showForm && <TaskForm  addPerson={addPerson} onCancel={handleCancel}/>}
        </div>
    );
};

export default Empleados;
