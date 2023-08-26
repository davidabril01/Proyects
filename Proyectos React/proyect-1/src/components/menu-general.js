import "./menu-general.css"
import img1 from "./images/pet-svgrepo-com.svg"
import img2 from "./images/pet-shirt-svgrepo-com.svg"
import img3 from "./images/pet-shampoo-shampoo-svgrepo-com.svg"
import img4 from "./images/pet-litter-box-svgrepo-com.svg"
import img5 from "./images/pet-house-kennel-svgrepo-com.svg"
import { Container } from "react-bootstrap"

function MenuGeneral(){
    return(
        <div className="menu1">
            <Container>
            <nav className="menu1__barra">
                <ul className="menu1__options">
                    <button className="menu1__option"><img src={img1}/></button>
                    <button className="menu1__option"><img src={img2}/></button>
                    <button className="menu1__option"><img src={img3}/></button>
                    <button className="menu1__option"><img src={img4}/></button>
                    <button className="menu1__option"><img src={img5}/></button>
                </ul>
            </nav>
            </Container>
        </div>
    );
}
export default MenuGeneral;