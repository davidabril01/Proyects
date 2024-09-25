import React, { useState, useEffect , useContext } from "react";
import { ThemeContext } from './ThemeProvider';
import axios from 'axios';
import "./PanelPrincipal.scss";
import ItemDetalles from "./ItemDetalles";
import ImagenClima from "./ImagenClima";

function PanelPrincipal() {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  
  useEffect(() => {
    // URL de la API
    const apiUrl = "https://www.meteosource.com/api/v1/free/point?lat=-31.41&lon=-64.1811&sections=current%2Chourly&language=en&units=auto&key=lm05ou3e2wwr9dbbbe2ntpjmae2ts1rhkutvvb2p";

    // Función para obtener la temperatura
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();

    // Establecer la fecha actual
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  const { current } = data;

  const panelClassName = `PanelPrincipal ${theme}`;
  return (
    <div className={panelClassName}>
      <h1>Clima En Córdoba</h1>
      <h2 className="Fecha">{new Date().toLocaleDateString('es-ES')}</h2>
      {current && (
        <>
          <ImagenClima icon={current.icon_num} />
          <div className="Temp">{current.temperature}°C</div>
          <div className="ClimaActual">
            <ItemDetalles>
              <div>Temperatura: </div>
              <div>{current.temperature}°C</div>
            </ItemDetalles>
            <ItemDetalles>
              <div></div>
              <div>{current.summary}</div>
            </ItemDetalles>
            <ItemDetalles>
              <div>Viento: </div>
              <div>{current.wind.speed} km/h {current.wind.dir}</div>
            </ItemDetalles>
            <ItemDetalles>
              <div>Cobertura de Nubes: </div>
              <div>{current.cloud_cover}%</div>
            </ItemDetalles>
            <ItemDetalles>
              <div>Precipitación: </div>
              <div>{current.precipitation.total} mm</div>
            </ItemDetalles>
            <ItemDetalles>
              <div>Hora: </div>
              <div>{new Date().toLocaleTimeString()}</div>
            </ItemDetalles>
          </div>
        </>
      )}
    </div>
  );
}

export default PanelPrincipal;
