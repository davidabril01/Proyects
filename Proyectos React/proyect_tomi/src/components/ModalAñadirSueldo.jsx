import "./ModalAñadirSueldo.scss"

const ModalAñadirSueldo = ({ onClose }) => {
    return (
        <div className="modalAñadirSueldo" onClick={onClose}>
            <div className='modalAñadirSueldo__content' onClick={(e) => e.stopPropagation()}>
                <input type="text" placeholder="Nombre del sueldo" className="modalAñadirSueldo__input-field" />
                <input type="number" placeholder="Precio del sueldo" className="modalAñadirSueldo__input-field" />
                <button className="modalAñadirSueldo__btn" onClick={onClose}>Añadir</button>
            </div>
        </div>
    );
}
export default ModalAñadirSueldo;