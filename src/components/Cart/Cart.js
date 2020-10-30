import React from 'react';
import { Link } from 'react-router-dom';


const Cart = (props) => {
  console.log(props.cart);
  let total =  props.cart.reduce( (total,prd)=> total+prd.price,0);
  total = Math.round(total);
  const tax = (total/10);
  return (
    
      <div className="cart-container">
        <h3> Your Cart </h3>
        
        <h4>Order summary: {props.cart.length} </h4>
        <h4> Product price: {total} </h4>
        <h4> Tax: {tax} </h4>
        <h4> Total pric: {total + tax } </h4>
        <Link to = "/review"> <button> Review your order </button> </Link>

      </div>
  );
};

export default Cart;