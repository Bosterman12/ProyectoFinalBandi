
import { initializeApp } from "firebase/app";
import{getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.APY_KEY,
  authDomain: "elsurubiatigrado.firebaseapp.com",
  projectId: "elsurubiatigrado",
  storageBucket: "elsurubiatigrado.appspot.com",
  messagingSenderId: "205556635783",
  appId: "1:205556635783:web:6bab2d18f4b547e96bc022"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async() => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(db, "productos"),{
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export const getProductos = async() => {
    const productos = await getDocs(collection(db,"productos"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return(items)
}

export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id:producto.id}
    return item
}

export const updateProducto = async (id, info) => {
    await updateDoc (doc(db, "productos",id), info)
}

export const deleteProducto = async(id) => {
    await deleteDoc (doc (db, "productos", id))
}

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc (collection (db, "ordenesCompra"),{
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const oC = await getDoc (doc (db, "ordenesCompra", id))
    const ordenCompra = {...oC.data(), id: oC.id}
    return ordenCompra
}