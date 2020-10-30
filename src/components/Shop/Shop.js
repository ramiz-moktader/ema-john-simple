import React, { useState } from 'react';
import fakeData from '../../fakeData'
import { getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const first10 = fakeData.slice(0,10);
  const [products, setproducts] = useState(first10);
  const [cart, setCart] = useState([]);
  const addProductHandle= (product) =>{
    const newCart = [...cart,product];
    setCart(newCart);
    console.log(product.key)
    getDatabaseCart(product.key,1);
  }
  return (
    <div className= 'shop-container'>
      <div className="product-container">
     
        {
          products.map(pd=><Product product ={pd} addProductHandle = {addProductHandle} showAddToCart = {true} > </Product>)
        }
     
      </div>
      
       {
         <Cart cart = {cart}> </Cart>
       }
      
      </div>
  );
};

export default Shop;