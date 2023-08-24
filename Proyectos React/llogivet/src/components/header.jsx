import { Container } from "react-bootstrap";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


function Header() {
    return (
        <div className="Header">
            <Container className="Header__content">
                <div className="content__user">
                    <span className="user__name">John</span>
                    <div className="user__icon-holder">
                        <FontAwesomeIcon className="icon-holder__icon" icon={faUser} />
                        <span className="icon-holder__tooltiptext">
                            <ul className="tooltiptext__options">
                                <li className="options__option"><a className="option__link" href="#">Opción 1</a></li>
                                <li className="options__option"><a className="option__link" href="#">Opción 2</a></li>
                                <li className="options__option"><a className="option__link" href="#">Opción 3</a></li>
                            </ul>
                    </span>
                    </div>
                    
                </div>
            </Container>
        </div>
    );
}
export default Header;