import React from 'react';
import { Item } from '../Item/Item';
import { Itemcart } from '../ItemCart/Itemcart';

export const ItemList = ({prods, plantilla}) => {
   
    return (
        <>
        {
            plantilla === "Item"
            ?
            prods.map(producto => <Item item={producto} key={producto.id} />) 
            :
            prods.map(producto => <Itemcart item={producto} key={producto.id} />)
        }
           
        </>
    );
}


