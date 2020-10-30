import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../../fakeData';
import Product from '../Product';

const ProductDetail = () => {
  const {productKey} =useParams();
  const product = fakeData.find(pd=>productKey === pd.key)
  return (
    <div>
      <h4> {productKey} product detials are coming sooooooon.....</h4>
      <Product product = {product} showAddToCart = {false}> </Product>
    </div>
  );
};

export default ProductDetail;