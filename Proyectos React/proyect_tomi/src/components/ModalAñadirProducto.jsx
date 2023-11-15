import "./ModalAñadirProducto.scss";

const ModalAñadirProducto = ({ onClose }) => {
    return (
        <div className="modalAñadirProducto" onClick={onClose}>
            <div className='modalAñadirProducto__content' onClick={(e) => e.stopPropagation()}>
                <input type="text" placeholder="Nombre del producto" className="modalAñadirProducto__input-field" />
                <input type="number" placeholder="Precio del producto" className="modalAñadirProducto__input-field" />
                <button className="modalAñadirProducto__btn" onClick={onClose}>Añadir</button>
            </div>
        </div>
    );
}
export default ModalAñadirProducto;