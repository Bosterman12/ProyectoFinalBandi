import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { useCarritoContext } from '../../context/CarritoContext';
export const Cart = () => {

    const{ carrito, emptyCart, totalPrice}=useCarritoContext()
    
    return(
        <>
        {
            carrito.length === 0
            ?
            <>
            <h2>Para finalizar la compra debe tener productos en el carrito</h2>
            <Link className="nav-link" to={"/"} ><button
             className="btn btn-primary">Continuar comprando</button> </Link>
            </>
            :
            <div className="container cartContainer">
            <ItemList prods={carrito} plantilla="ItemCart"/>
            <div className="divButtons" >
                <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())} </p>
                <button className="btn btn-danger" onClick={()=> emptyCart() } >Vaciar
                 Carrito</button>
                 <Link className="nav-link" to={"/"}  ><button className="btn btn-dark" >Continuar comprando</button> </Link>
                 <Link className="nav-link" to={"/checkout"}  ><button className="btn btn-dark" >Finalizar compra</button> </Link>
            </div>
            </div>
        }
        
        </>
    )

}


