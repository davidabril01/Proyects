import "./menu-convencional.css"
import { Container } from "react-bootstrap";

function MenuConvencional() {
    return (
        <div className="menu">
            <Container>
            <nav className="menu__barra">
                <ul className="menu__options">
                    <li className="menu__option"><a href="#">Categorias</a></li>
                    <li className="menu__option"><a href="#">Mapa</a></li>
                    <li className="menu__option"><a href="#">Comida</a></li>
                    <li className="menu__option"><a href="#">Perritos</a></li>
                    <li className="menu__option option__gatitos">
                        <a href="#">
                            <span className="tooltiptext">
                                <ul>
                                    <li><a href="#">Opción 1</a></li>
                                    <li><a href="#">Opción 2</a></li>
                                    <li><a href="#">Opción 3</a></li>
                                </ul>
                            </span>Gatitos
                        </a>
                    </li>
                </ul>
            </nav>
            </Container>
        </div>
    );
}
export default MenuConvencional;