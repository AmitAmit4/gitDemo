import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItemQuantity } from '../redux/cartSlice';

const Cart = () => {
  const { items, totalPrice, totalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  console.log("items in cart useSelect", items);
  
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateItemQuantity({ id, quantity }));
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 && <p>Your cart is empty!</p>}
      {items.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleUpdateQuantity(item.id, +e.target.value)}
            min="1"
          />
        </div>
      ))}
      <h3>Total Quantity: {totalQuantity}</h3>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
