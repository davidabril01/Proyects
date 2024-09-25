import React from "react";
import "./ItemDetalles.scss";

function ItemDetalles({ children }) {
    return (
        <div className="ItemDetalles spaced-content">
            {children}
        </div>
    );
}

export default ItemDetalles;
