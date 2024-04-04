import { Container } from "react-bootstrap";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"
import mascota1 from "../images/tamanna-rumee-FtJEat_S7Q4-unsplash.jpg"
import mascota2 from "../images/felipe-correia-Z3r7p3DqXeM-unsplash.jpg"
import mascota3 from "../images/jason-leung-hsS6jTr-pns-unsplash.jpg"

import React, { useState } from 'react';

function HeaderNoUser() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setIsMenuOpen(false);
    };

   

    return (

        <div className="Header">
            <Container className="Header__content">
                <div className="content__else">
                </div>
                <div className="content__user">
                    <span className="user__name">User</span>
                    <div className="user__icon-holder">
                        <FontAwesomeIcon className="icon-holder__icon" icon={faUser} />
                        <div className="icon-holder__tooltiptext">
                            <div className="tooltiptext__options">
                                <div className="options__option"><a className="option__link" href="#">.</a></div>
                                <div className="options__option"><a className="option__link" href="#">.</a></div>
                                <div className="options__option"><a className="option__link" href="#">.</a></div>
                                <div className="options__option"><a className="option__link" href="#">.</a></div>
                                <div className="options__option"><a className="option__link" href="#">.</a></div>
                                <div className="options__option"><a className="option__link" href="/UserIn">Iniciar sesión</a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
}
export default HeaderNoUser;