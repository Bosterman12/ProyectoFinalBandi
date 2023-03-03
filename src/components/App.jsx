
import './App.css';
import {Navbar} from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailComtainer/ItemDetailContainer';
import { Ckeckout } from './Checkout/Ckeckout';
import { Cart } from './Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import React from 'react';

export const App = () => {
  return (
    
    <>
      <BrowserRouter>
      <Navbar nombre={"El Surubi"}/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/Checkout' element={<Ckeckout/>}/>
      <Route path='/Cart' element ={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </>
  
  );
}


