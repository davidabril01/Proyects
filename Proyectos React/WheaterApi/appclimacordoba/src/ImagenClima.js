import React from "react";
import "./ImagenClima.scss"

function ImagenClima({ icon }) {
    const imageUrl = require(`./big/${icon}.png`);

    return (
        <div className="ImagenClima">
            <img src={imageUrl} alt="Weather Icon" />
        </div>
    );
}

export default ImagenClima;
