import './Principal.scss';
import BarraProgreso from './barraProgreso';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChartColumn, faDollarSign, faListCheck, faMinus } from "@fortawesome/free-solid-svg-icons";

function Principal() {
  const navigate = useNavigate();

  const ClickVentas = () => {
    navigate('/Ventas');
  };
  const ClickGestion = () => {
    navigate('/Gestion');
  };

  return (
    <div className="principal">
      <div className="principal__text">
        <span className="text__title">Bienvenido David</span>
        <span className="text__buttons">Que necesitas?</span>
      </div>
      <div className="principal__buttons">
        <button className="buttons__style cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#65a76f] h-9 rounded-md px-3" onClick={ClickVentas} >Vender<FontAwesomeIcon className='buttons__style__icon' icon={faDollarSign} /></button>
        <button
          className="buttons__style cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#65a76f] h-9 rounded-md px-3"
        >Gestionar<FontAwesomeIcon className='buttons__style__icon' onClick={ClickGestion} icon={faChartColumn} /></button>
        <button
          className="buttons__style cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#65a76f] h-9 rounded-md px-3"
        >Menu<FontAwesomeIcon className='buttons__style__icon' icon={faBars} /></button>
      </div>

      <div className='principal__barra'>
        <BarraProgreso />
      </div>
      <div className='principal__vencimientos'>
        <span className='vencimientos__text'>Tus vencimientos</span>
        <div className='vencimientos'>
          <div className='vencimientos__vencimiento vencimientos__vencimiento-v1'>
            <h3 className='vencimiento__fecha'>15/12/2024</h3>
            <h3 className='vencimiento__titulo'>AFIP</h3>
            <h3 className='vencimiento__monto'>-59030$</h3>
          </div>
          <div className='vencimientos__vencimiento vencimientos__vencimiento-v2'>
            <h3 className='vencimiento__fecha'>23/12/2024</h3>
            <h3 className='vencimiento__titulo'>EPEC</h3>
            <h3 className='vencimiento__monto'>-20430$</h3>
          </div>
          <div className='vencimientos__vencimiento vencimientos__vencimiento-v3'>
            <h3 className='vencimiento__fecha'>11/11/2024</h3>
            <h3 className='vencimiento__titulo'>Pagina Web</h3>
            <h3 className='vencimiento__monto'>-109650$</h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Principal;