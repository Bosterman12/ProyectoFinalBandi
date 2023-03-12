import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
export const Cart = () => {
    const carrito = [{id:1,idCategoria:"cañas",cant: 10, nombre:"Caña",marca: "Okuma",modelo:"Morena power",precio:20350,stock:30,img:"https://firebasestorage.googleapis.com/v0/b/elsurubiatigrado.appspot.com/o/ca%C3%B1a-okuma.jpg?alt=media&token=e3f2ff3f-3f37-452a-9daf-efcfb8c4d02e"}, {id:1,idCategoria:"cañas",cant:5, nombre:"Caña",marca: "Okuma",modelo:"Morena power",precio:20350,stock:30,img:"https://firebasestorage.googleapis.com/v0/b/elsurubiatigrado.appspot.com/o/ca%C3%B1a-okuma.jpg?alt=media&token=e3f2ff3f-3f37-452a-9daf-efcfb8c4d02e"}, {id:1,idCategoria:"cañas",cant:7, nombre:"Caña",marca: "Okuma",modelo:"Morena power",precio:20350,stock:30,img:"https://firebasestorage.googleapis.com/v0/b/elsurubiatigrado.appspot.com/o/ca%C3%B1a-okuma.jpg?alt=media&token=e3f2ff3f-3f37-452a-9daf-efcfb8c4d02e"}]
    
    return(
        <>
        {
            carrito.length === 0
            ?
            <>
            <h2>Carrito vacio</h2>
            <Link className="nav-link" to={"/"} ><button
             className="btn btn-primary">Continuar comprando</button> </Link>
            </>
            :
            <div className="container cartContainer">
            <ItemList prods={carrito} plantilla="ItemCart"/>
            <div className="divButtons" >
                <p>Resumen de la compra: PrecioTotal</p>
                <button className="btn btn-danger" onClick={()=>console.log("Productos eliminados")} >Vaciar
                 Carrito</button>
                 <Link className="nav-link" to={"/"}  ><button className="btn btn-dark" >Continuar comprando</button> </Link>
                 <Link className="nav-link" to={"/checkout"}  ><button className="btn btn-dark" >Finalizar compra</button> </Link>
            </div>
            </div>
        }
        
        </>
    )

}


