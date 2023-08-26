import "./header.css"
import { Container } from "react-bootstrap";

function Header() {
    return (
        <header className="head">
            <Container className="head-section">
                <div className="head-section__domain">
                    <h1 className="domain__name">Llogivet</h1>
                    <small className="domain__extension">.com</small>
                </div>
                <div className="head-section__searcher">
                    <input className="searcher__text-holder" type="text" placeholder="Buscar..."></input>
                    <button className="searcher__button">
                        <i className="searcher__icon material-symbols-outlined">
                            search
                        </i>
                    </button>
                </div>
                <div className="head-section__button-place">
                    <button className="button-place__button">Contratanos</button>
                </div>
                <div className="head-section__icons">
                    <i className="icons__user-icon material-symbols-outlined">person</i>
                    <i className="icons__wish-icon material-symbols-outlined">favorite</i>
                    <i className="icons__cart-icon material-symbols-outlined">shopping_cart</i>
                </div>
            </Container>
        </header>
    );
}

export default Header;