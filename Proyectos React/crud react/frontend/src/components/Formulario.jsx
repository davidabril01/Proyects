// En TaskForm.js
import React, { useState } from 'react';
import './Formulario.css'

const TaskForm = ({ addPerson, onSubmit, onCancel }) => { // Cambiar onSubmit por addPerson
    // Estados para los campos del formulario
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [skills, setSkills] = useState('');
    const [designation, setDesignation] = useState('');
    const [address, setAddress] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Llamamos a la función addPerson pasando los datos del formulario
        addPerson({ nombre: name, edad: age, habilidades: skills, designacion: designation, direccion: address });
        // Reiniciar los estados después de enviar el formulario
        setName('');
        setAge('');
        setSkills('');
        setDesignation('');
        setAddress('');
    };


    const handleCancel = () => {
        // Agrega aquí la lógica para cancelar el formulario si es necesario
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3 form">
            <h3>Añadir Empleado</h3>
            <div className="form__group mb-3">
                <input
                    type="text"
                    className="form__control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Nombre...'
                    required
                />
            </div>
            <div className="form__group mb-3">
                <input
                    type="number"
                    className="form__control"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder='Edad...'
                    required
                />
            </div>
            <div className="form__group mb-3">
                <input
                    type="text"
                    className="form__control"
                    id="skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder='Habililidades...'
                    required
                />
            </div>
            <div className="form__group mb-3">
                <input
                    type="text"
                    className="form__control"
                    id="designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    placeholder='Designación...'
                    required
                />
            </div>
            <div className="form__group mb-3">
                <input
                    type="text"
                    className="form__control"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Dirección...'
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary form__btn-primary">Agregar</button>
            <button type="button" className="btn btn-secondary form__btn-secondary" onClick={handleCancel}>Cancelar</button>
        </form>
    )
};

export default TaskForm;
