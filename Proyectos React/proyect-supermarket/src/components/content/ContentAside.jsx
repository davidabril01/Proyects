import "./ContentAside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookBookmark, faBookOpen, faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function Content__aside() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return(
    <div className="content__aside">
        <button onClick={toggleMenu} className="aside__top">
            <FontAwesomeIcon className="top__bars-icon" icon={faBars} />
            <span className="top__extend-text">All departaments</span>
            <FontAwesomeIcon className="top__extend-icon" icon={faChevronDown} />
        </button>
        <div className="departaments__contenedor">
            <CSSTransition
                in={menuVisible}
                timeout={500}
                classNames="menu"
                unmountOnExit
            >
                <div className="aside__departaments">
                    <a className="aside__departament">Fresh Meat</a>
                    <a className="aside__departament">Vegetables</a>
                    <a className="aside__departament">Fruit & Nut Gifts</a>
                    <a className="aside__departament">Fresh Berries</a>
                    <a className="aside__departament">Ocean Foods</a>
                    <a className="aside__departament">Butter & Eggs</a>
                    <a className="aside__departament">FastFood</a>
                    <a className="aside__departament">Fresh Onion</a>
                    <a className="aside__departament">Papacaya & Crisps</a>
                    <a className="aside__departament">Oatmeal</a>
                    <a className="aside__departament">Fresh Bananas</a>
                </div>
            </CSSTransition>
        </div>
        <div className="principal__top1">
            <div className="top__searcher">
                <div className="searcher__categories">
                    <span className="categories__name">All Categories</span>
                    <FontAwesomeIcon className="categories__icon-extend" icon={faChevronDown} />
                </div>
                <div className="searcher__text-holder">
                    <input className="text-holder__input" placeholder="What do you need?" type="text"></input>
                </div>
                <button className="searcher__button">SEARCH</button>
            </div>
            <div className="top__contact">
                <button className="contact__button"><FontAwesomeIcon className="button__icon" icon={faPhone} /></button>
                <div className="contact__info">
                    <span className="info__number">+65 11.180.806</span>
                    <span className="info__support">support 24/7 time</span>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Content__aside;