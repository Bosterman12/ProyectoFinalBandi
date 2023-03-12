import { useContext, createContext, useState } from "react";

const CarritoContext = createContext ()

export const useCarritoContext = () => useContext (CarritoContext)

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState ([])

    //si existe producto en el carrito

    const isInCart = (id) => {
        return carrito.find (prod => prod.id === id)
    }

    //eliminar producto del carrito
    
    const removeItem = (id) => {
        setCarrito(carrito.filter (prod => prod.id !== id))
    }

    //vaciar el carrito

    const emptyCart = () => {
        setCarrito([])
    }

    //agregar producto al carrito

    const addItem = (producto, cantidad) => {
        if (isInCart(producto.id)){
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux =[...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
    } else {
        const prodCart = {
            ...producto,
            cant: cantidad
        }
        setCarrito([...carrito,prodCart])
    }
    
}

    //cantidad total de productos en el carrito

    const getItemQuantity = () =>{
        return carrito.reduce((acum, prod) => acum += prod.cant , 0)
    }

    //precio total de la compra
    const totalPrice = () => {
        return carrito.reduce ((acum, prod) => acum += (prod.cant * prod.precio), 0) 
    }

    console.log (carrito)

    return(
       < CarritoContext.Provider value={{ carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
        {props.children}
       </CarritoContext.Provider>
    )
}