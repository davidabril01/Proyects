import React from "react";
import "./TablaVentasCompletadas.scss";

const TablaVentasCompletadas = () => {
    const ventas = [
        { numero: 1, monto: 100 },
        { numero: 2, monto: 200 },
        { numero: 3, monto: 300 },
    ];
    const totalMonto = ventas.reduce((total, venta) => total + venta.monto, 0);
    return (
        <div className="tabla-ventas-completadas">
            <table>
                <thead>
                    <tr>
                        <th className="ventas-table__header">Número de Venta</th>
                        <th className="ventas-table__header">Monto Total</th>
                        <th className="ventas-table__header"></th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta) => (
                        <tr key={venta.numero} className="ventas-table__row">
                            <td className="ventas-table__cell">{venta.numero}</td>
                            <td className="ventas-table__cell">{venta.monto}</td>
                            <td className="ventas-table__cell">
                                <button className="ventas-table__button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="red" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="total-line">
                <span className="total-line__texto">Total: </span>
                <span className="total-line__monto">{totalMonto}</span>
            </div>
        </div>
    );
};

export default TablaVentasCompletadas;