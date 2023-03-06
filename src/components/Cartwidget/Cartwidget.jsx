import React from 'react';
import { Link } from 'react-router-dom';
export const Cartwidget = ({cantCarrito}) => {
    return (
        <>
           <Link className="nav-link" to={"/cart"} ><button className="btn btn-dark"><i className="bi bi-cart4"></i></button></Link>
           <p>{cantCarrito}</p> 
        </>
    );
}

//<button className="btn btn-dark">Carrito</button>//
