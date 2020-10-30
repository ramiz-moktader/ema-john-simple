import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { img, name, seller, price, stock,key } = props.product;
  return (
    <div className='product'>
      <div>
        <img src={img} alt="" />
      </div>
      <div className='product-name' >
        <h4 >
           <Link to = {"/product/" + key } > {name} </Link>
        </h4> <br />
        <p> <small> By: {seller} </small></p>
        <p> Price: $ {price} </p>
        <p> Only {stock} left.Order soon  </p>
        {props.showAddToCart && <button onClick= {()=> {props.addProductHandle(props.product) }} className="add-to-cart-button">  <FontAwesomeIcon icon={faShoppingCart} /> Add to cart </button>}

      </div>
    </div>
  );
};

export default Product;