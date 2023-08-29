import { Container } from "react-bootstrap";
import "./ContentProducts.css";

function Content__products(){
    return(
        <Container className="content__products">
            <h1 className="products__title">Featured Product</h1>
            <div className="products__categories">
                <div className="categories__option first">All</div>
                <div className="categories__option">Orange</div>
                <div className="categories__option">Fresh Meat</div>
                <div className="categories__option">Vegetables</div>
                <div className="categories__option">Fastfood</div>
            </div>
            <div className="products__container">
                <div className="container__product">
                    <div className="producto__image-container">
                        <img className="image-container__image"></img>
                    </div>
                    <div className="product__name">Grab Pool Security</div>
                    <div className="product__price">$30.00</div>
                </div>
                <div className="container__product">
                    <div className="producto__image-container">
                        <img className="image-container__image"></img>
                    </div>
                    <div className="product__name">Grab Pool Security</div>
                    <div className="product__price">$30.00</div>
                </div>
                <div className="container__product">
                    <div className="producto__image-container">
                        <img className="image-container__image"></img>
                    </div>
                    <div className="product__name">Grab Pool Security</div>
                    <div className="product__price">$30.00</div>
                </div>
                <div className="container__product">
                    <div className="producto__image-container">
                        <img className="image-container__image"></img>
                    </div>
                    <div className="product__name">Grab Pool Security</div>
                    <div className="product__price">$30.00</div>
                </div>
                <div className="container__product">
                    <div className="producto__image-container">
                        <img className="image-container__image"></img>
                    </div>
                    <div className="product__name">Grab Pool Security</div>
                    <div className="product__price">$30.00</div>
                </div>
                <div className="container__product">
                    <div className="producto__image-container">
                        <img className="image-container__image"></img>
                    </div>
                    <div className="product__name">Grab Pool Security</div>
                    <div className="product__price">$30.00</div>
                </div>
                <div className="container__product">
                    <div className="producto__image-container">
                        <img className="image-container__image"></img>
                    </div>
                    <div className="product__name">Grab Pool Security</div>
                    <div className="product__price">$30.00</div>
                </div>
                <div className="container__product">
                    <div className="producto__image-container">
                        <img className="image-container__image"></img>
                    </div>
                    <div className="product__name">Grab Pool Security</div>
                    <div className="product__price">$30.00</div>
                </div>
            </div>
        </Container>
    );
}
export default Content__products;