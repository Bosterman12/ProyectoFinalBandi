import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';


export const Cartwidget = () => {

    const {getItemQuantity} = useCarritoContext()
    return (
        <>
           <Link className="nav-link" to={"/cart"} ><button className="btn btn-dark cartWidget"><i className="bi bi-cart4"></i></button></Link>
           {getItemQuantity() > 0 && <span className="cantCarrito" >
           {getItemQuantity() } </span> } 
        </>
    );
}
 
//<button className="btn btn-dark">Carrito</button>//
