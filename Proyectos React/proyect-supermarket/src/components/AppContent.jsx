import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookBookmark, faBookOpen, faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./AppContent.css"
import { Container } from "react-bootstrap";
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import VegPhoto from "./images/imageedit_1_7563330645.png";
import Carrusel from "./carousel";
import Content__aside from "./content/ContentAside";
import Content__products from "./content/ContentProducts";

function App__content() {
    
    return (
        <Container className="App__content">
            <Container className="content">
                <Content__aside className="content__aside"/>
                <div className="content__principal">
                    <div className="principal__top">
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
                    <div className="principal__front">
                        <div className="front__texts">
                            <h2 className="texts__subtitle">FRUIT FRESH</h2>
                            <h1 className="texts__title">Vegetable 100% Organic</h1>
                            <p className="texts__description">free pickup and Delivers Available</p>
                            <button className="texts__button">SHOP NOW</button>
                        </div>
                        <div className="front__image-containter">
                            <img className="image-container__img" src={VegPhoto}></img>
                        </div>
                    </div>
                </div>
            </Container>
            <Carrusel className="content__carrousel" />
            <Content__products className="content__products"/>
        </Container>
    );
}
export default App__content;