import React from 'react';

export const Cartwidget = ({cantCarrito}) => {
    return (
        <>
           <button className="btn btn-dark"><i className="bi bi-cart4"></i></button>
           <p>{cantCarrito}</p> 
        </>
    );
}

//<button className="btn btn-dark">Carrito</button>//
