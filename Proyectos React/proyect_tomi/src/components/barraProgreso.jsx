import './barraProgreso.scss';

function BarraProgreso() {
  return (
    <div className="barraProgreso">
      <header className="barraProgreso-header">
        <div className='progreso-circular progreso'>
          <div className='progreso-circular__barrita'></div>
        </div>
      </header>
    </div>
  );
}

export default BarraProgreso;