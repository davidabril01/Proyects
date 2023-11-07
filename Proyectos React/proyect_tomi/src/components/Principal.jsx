import './Principal.scss';
import BarraProgreso from './barraProgreso';

function Principal() {
  return (
    <div className="principal">
      <span className="principal__text">Que necesitas?</span>
      <div className="principal__buttons">
        <button className="buttons__vender">Vender</button>
        <button className="buttons__gestionar">Gestionar</button>
      </div>
      <div className='principal__barra'>
        <BarraProgreso />
      </div>
      <div className='principal__vencimientos'>
        <span className='vencimientos__text'>Vencimientos</span>
        <div className='vencimientos'>
          <div className='vencimientos__vencimiento'>
            <h3 className='vencimiento__fecha'>15 de Diciembre</h3>
            <h3 className='vencimiento__titulo'>AFIP</h3>
            <h3 className='vencimiento__monto'>-59030$</h3>
          </div>
          <div className='vencimientos__vencimiento'>
            <h3 className='vencimiento__fecha'>23 de Diciembre</h3>
            <h3 className='vencimiento__titulo'>EPEC</h3>
            <h3 className='vencimiento__monto'>-20430$</h3>
          </div>
          <div className='vencimientos__vencimiento'>
            <h3 className='vencimiento__fecha'>11 de Noviembre</h3>
            <h3 className='vencimiento__titulo'>Pagina Web</h3>
            <h3 className='vencimiento__monto'>-109650$</h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Principal;