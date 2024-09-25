import React, { useState } from 'react';
import './App.css';
import convert from 'convert-units';

function App() {
  const [valor, setValor] = useState('');
  const [unidadOrigen, setUnidadOrigen] = useState('');
  const [unidadDestino, setUnidadDestino] = useState('');
  const [resultado, setResultado] = useState('');

  const unidades = [
    { nombre: 'Metros', valor: 'm' },
    { nombre: 'Kilómetros', valor: 'km' },
    { nombre: 'Centímetros', valor: 'cm' },
    { nombre: 'Milímetros', valor: 'mm' },
    { nombre: 'Pulgadas', valor: 'in' },
    { nombre: 'Pies', valor: 'ft' },
    { nombre: 'Yardas', valor: 'yd' }
  ];

  const convertir = () => {
    const valorNumerico = parseFloat(valor);
  
    if (isNaN(valorNumerico)) {
      setResultado('Por favor, ingrese un número válido.');
      return;
    }
  
    try {

      let resultadoFinal = convert(valorNumerico).from(unidadOrigen).to(unidadDestino);

      resultadoFinal = resultadoFinal.toFixed(2);
  
      setResultado(`${valor} ${unidadOrigen} -> ${resultadoFinal} ${unidadDestino}`);
    } catch (error) {
      setResultado('Conversión no soportada.');
    }
  };
  

  return (
    <div className="App">
      <h2 className='App__title'>Conversión de Unidades</h2>
      <div className='App__contenedorIngreso'>
        <input
          className='contenedorIngreso__input'
          type='text'
          placeholder='Ingrese Valor'
          id='i_valor'
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <div className='contenedorIngreso__contenedorCB'>
          <label className='contenedorCB__label' htmlFor="o_unidad">Unidad De Origen</label>
          <select
            className='contenedorCB__comboBox'
            name="o_unidad"
            id="o_unidad"
            value={unidadOrigen}
            onChange={(e) => setUnidadOrigen(e.target.value)}
          >
            <option value="">Selecciona</option>
            {unidades.map((unidad) => (
              <option key={unidad.valor} value={unidad.valor}>
                {unidad.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className='contenedorIngreso__contenedorCB'>
          <label className='contenedorCB__label' htmlFor="d_unidad">Unidad De Destino</label>
          <select
            className='contenedorCB__comboBox'
            name="d_unidad"
            id="d_unidad"
            value={unidadDestino}
            onChange={(e) => setUnidadDestino(e.target.value)}
          >
            <option value="">Selecciona</option>
            {unidades.map((unidad) => (
              <option key={unidad.valor} value={unidad.valor}>
                {unidad.nombre}
              </option>
            ))}
          </select>
        </div>
        <button
          className='contenedorIngreso__submit'
          type="button"
          onClick={convertir}
        >
          Convertir!!
        </button>
      </div>
      <span className='App__resultado'>{resultado}</span>
    </div>
  );
}

export default App;
