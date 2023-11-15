import './Modal.scss';
import ProductList from './ProductList';

const Modal = ({ onClose }) => {
    return (
        <div className="modal" onClick={onClose}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <button className='content__boton-cerrar' onClick={onClose}>
                    <svg className="boton-cerrar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05 7.05 5.636 12 10.586z" />
                    </svg>
                </button>
                <div className="content__search-box">
                    <svg className="search-box__search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input class="search-box__search-input" type="text" placeholder="search" />
                </div>
                <ProductList/>
                <button className='content__boton-agregar' onClick={onClose}>
                    Agregar
                </button>
            </div>
        </div>
    );
}

export default Modal;