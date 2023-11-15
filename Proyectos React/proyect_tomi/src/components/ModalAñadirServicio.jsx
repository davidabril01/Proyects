import "./ModalAñadirServicio.scss"

const ModalAñadirServicio = ({ onClose }) => {
    return (
        <div className="modalAñadirServicio" onClick={onClose}>
            <div className='modalAñadirServicio__content' onClick={(e) => e.stopPropagation()}>
                <input type="text" placeholder="Nombre del servicio" className="modalAñadirServicio__input-field" />
                <input type="number" placeholder="Precio del servicio" className="modalAñadirServicio__input-field" />
                <button className="modalAñadirServicio__btn" onClick={onClose}>Añadir</button>
            </div>
        </div>
    );
}
export default ModalAñadirServicio;