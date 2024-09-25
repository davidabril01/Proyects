import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';
import "./ProductPage.css";

function ProductPage() {
  const { productName } = useParams(); // Captura el nombre del producto desde la URL
  const [gananciasMensuales, setGananciasMensuales] = useState([]); // Estado para las ganancias

  // Cargar las ganancias del producto específico desde sessionStorage al montar el componente
  useEffect(() => {
    const storedGanancias = JSON.parse(sessionStorage.getItem('gananciasMensuales')) || {};

    // Si hay ganancias para el producto actual, cargarlas
    if (storedGanancias[productName]) {
      setGananciasMensuales(storedGanancias[productName]);
    }
  }, [productName]);

  // Función para agregar una nueva ganancia al producto específico
  const addGanancia = (ganancia) => {
    const updatedGanancias = [...gananciasMensuales, ganancia];
    setGananciasMensuales(updatedGanancias);

    // Guardar las ganancias del producto específico en sessionStorage
    const storedGanancias = JSON.parse(sessionStorage.getItem('gananciasMensuales')) || {};
    storedGanancias[productName] = updatedGanancias;
    sessionStorage.setItem('gananciasMensuales', JSON.stringify(storedGanancias));
  };

  // Función para eliminar una ganancia
  const deleteGanancia = (index) => {
    const updatedGanancias = gananciasMensuales.filter((_, i) => i !== index);
    setGananciasMensuales(updatedGanancias);

    // Actualizar sessionStorage con las ganancias actualizadas
    const storedGanancias = JSON.parse(sessionStorage.getItem('gananciasMensuales')) || {};
    storedGanancias[productName] = updatedGanancias;
    sessionStorage.setItem('gananciasMensuales', JSON.stringify(storedGanancias));
  };

  // Manejo del submit del formulario para agregar una nueva ganancia
  const handleGananciaSubmit = (e) => {
    e.preventDefault();
    const ganancia = parseFloat(e.target.ganancia.value);
    if (!isNaN(ganancia)) {
      addGanancia(ganancia);
      e.target.reset(); // Limpiar el input después de agregar la ganancia
    }
  };

  return (
    <div className='ProductPage'>
      <div className='ProductPage__titleContainter'>
        <h1 className='ProductPage__title'>Página del Producto: {productName}</h1>
        <Button route={"/"} width={"100px"}>Volver</Button>
      </div>
      <div className='ProductPage__ganancias'>
        <div className='ProductPage__gananciasGraphic'></div>
        <h2 className='ProductPage__gananciasTitle'>Ganancias Mensuales</h2>
        <div className='graphic'>
          {gananciasMensuales.map((ganancia, index) => {

            const maxGanancia = Math.max(...gananciasMensuales);
            const currentHeight = ganancia * 300 / maxGanancia;
            const previousHeight = index > 0 ? gananciasMensuales[index - 1] * 300 / maxGanancia : 0;

            // Calculamos la diferencia de altura y la distancia horizontal
            const deltaY = previousHeight - currentHeight;
            const deltaX = 70; // 50px de ancho de la barra + 20px de gap
            const angle = (Math.atan2(deltaY, deltaX) * (180 / Math.PI)) + 180; // Invertimos el ángulo
            const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY); // Longitud de la línea

            return (
              <div key={index} className="graphic__container">
                {index > 0 && (
                  <div
                    className="graphic__line"
                    style={{
                      width: `${length}px`,
                      transform: `rotate(${angle}deg)`
                    }}
                  ></div>
                )}
                <div
                  style={{
                    height: `${currentHeight}px`
                  }}
                  className='graphic__bar'
                >
                  <span className='bar__number'>${ganancia}</span>
                  <button className='bar__delete' onClick={() => deleteGanancia(index)}>Eliminar</button>
                </div>
              </div>
            );
          })}

          {/* Cálculo y renderizado de la predicción del siguiente mes */}
          {gananciasMensuales.length > 0 && (() => {
            const maxGanancia = Math.max(...gananciasMensuales);
            // Número de meses
            const meses = gananciasMensuales.map((_, index) => index + 1);

            // Función para calcular la regresión lineal simple
            function regresionLineal(meses, ganancias) {
              const n = meses.length;
              const sumX = meses.reduce((acc, curr) => acc + curr, 0);
              const sumY = ganancias.reduce((acc, curr) => acc + curr, 0);
              const sumXY = meses.reduce((acc, curr, index) => acc + curr * ganancias[index], 0);
              const sumX2 = meses.reduce((acc, curr) => acc + curr * curr, 0);

              const pendiente = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
              const intercepto = (sumY - pendiente * sumX) / n;

              return { pendiente, intercepto };
            }

            const { pendiente, intercepto } = regresionLineal(meses, gananciasMensuales);

            // Predicción para el siguiente mes (mes n + 1)
            const siguienteMes = meses.length + 1;
            const prediccionTendencia = (pendiente * siguienteMes + intercepto);

            const prediccionHeight = (prediccionTendencia / maxGanancia) * 300;
            // Calculamos la línea entre la última ganancia y la predicción
            const lastHeight =
              (gananciasMensuales[gananciasMensuales.length - 1] / maxGanancia) *
              300;
            const deltaYPrediccion = lastHeight - prediccionHeight;
            const deltaXPrediccion = 70; // Misma distancia horizontal que las barras
            const anglePrediccion =
              (Math.atan2(deltaYPrediccion, deltaXPrediccion) * (180 / Math.PI)) + 180;
            const lengthPrediccion = Math.sqrt(
              deltaXPrediccion * deltaXPrediccion + deltaYPrediccion * deltaYPrediccion
            );

            return (
              <div className="graphic__container">
                {/* Línea punteada entre la última ganancia y la predicción */}
                <div
                  className="graphic__line graphic__line--prediction"
                  style={{
                    width: `${lengthPrediccion}px`,
                    transform: `rotate(${anglePrediccion}deg)`
                  }}
                ></div>

                {/* Barra de la predicción */}
                <div
                  style={{
                    height: `${prediccionHeight}px`
                  }}
                  className='graphic__bar graphic__bar--prediccion'
                >
                  <span className='bar__prediccionText'>
                    Predicción: ${prediccionTendencia.toFixed(2)}
                  </span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>


      <div className='ProductPage__registrarGanancia'>
        <h2 className='registrarGanancia__title'>Registrar Ganancia Mensual</h2>
        <form onSubmit={handleGananciaSubmit} className='registrarGanancia__form'>
          <input
            type="number"
            name="ganancia"
            placeholder="..."
            step="0.01"
            required
            className='registrarGanancia__input'
          />
          <button type="submit" className='registrarGanancia__button'>Agregar Ganancia</button>
        </form>
      </div>
    </div>
  );
}

export default ProductPage;
