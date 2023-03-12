
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {Navbar} from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailComtainer/ItemDetailContainer';
import { Ckeckout } from './Checkout/Ckeckout';
import { Cart } from './Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { DarkModeProvider } from '../context/DarkModeContext';
import { getProductos } from './utils/firebase';



import React from 'react';

export const App = () => {
getProductos()
  return (
    
    <>
      <BrowserRouter>
      <DarkModeProvider>
        <Navbar nombre={"El Surubi"}/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/Checkout' element={<Ckeckout/>}/>
          <Route path='/Cart' element ={<Cart/>}/>
        </Routes>
        <ToastContainer/>
      </DarkModeProvider>
      
      </BrowserRouter>
    </>
  
  );
}


