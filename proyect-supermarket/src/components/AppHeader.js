
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from "@fortawesome/free-brands-svg-icons"
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import LogoSvg from "./image (2).svg";
import { Container } from "react-bootstrap"
import "./AppHeader.css"

function App__header() {
    return (
        <div className='App__header'>
            <Container className='header__container'>
                <img className="header__logo" src={LogoSvg}></img>
                <div className="header__menu">
                    <a className="menu__link">HOME</a>
                    <a className="menu__link">SHOP</a>
                    <a className="menu__link">PAGES</a>
                    <a className="menu__link">BLOG</a>
                    <a className="menu__link">CONTACT</a>
                </div>
                <div className="header__cart">
                    <FontAwesomeIcon className="cart__heart" icon={faHeart}/>
                    <FontAwesomeIcon className="cart__bag" icon={faBagShopping}/>
                    <span className="cart__total">Total<span className="total__bold">$190</span></span>
                </div>
            </Container>
        </div>);
}

export default App__header;
