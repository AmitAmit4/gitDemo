import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
   const points = dispatch(addItem({ id: product.id, name: product.name, price: product.price, quantity: 1 }));
   console.log("items add in cart", points);
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
