import React, { useState } from "react";
import "./ProductList.scss"

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="content__list-container">
      <ul className="list-container__product-list">
        <li
          className={`product-list__product ${
            selectedProduct === "Producto 1" ? "selected" : ""
          }`}
          onClick={() => handleProductSelect("Producto 1")}
        >
          <span className="product__name">Producto 1</span>
          <span className="product__price">$10.00</span>
        </li>
        <li
          className={`product-list__product ${
            selectedProduct === "Producto 2" ? "selected" : ""
          }`}
          onClick={() => handleProductSelect("Producto 2")}
        >
          <span className="product__name">Producto 2</span>
          <span className="product__price">$15.00</span>
        </li>
        <li
          className={`product-list__product ${
            selectedProduct === "Producto 3" ? "selected" : ""
          }`}
          onClick={() => handleProductSelect("Producto 3")}
        >
          <span className="product__name">Producto 3</span>
          <span className="product__price">$20.00</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductList;