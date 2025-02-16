import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/usingcartSlice";
import { useNavigate } from "react-router-dom";

const UsingCart = () => {

  const navigate = useNavigate();
  const { cartItems, totalQuantity, totalAmount } = useSelector((state) => state.usingcart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  // const handleUpdateClick = (id) => {
  //   if (updatedQuantities[id] > 0) {
  //     dispatch(updateQuantity({ id, quantity: updatedQuantities[id] }));
  //   }
  // };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
    <div>
      <h1>Cart</h1>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
            <img src={item.image} alt={item.title} width={50} />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.totalPrice.toFixed(2)}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            {/* <button onClick={() => handleUpdateClick(item.id)}>Update</button> */}
          </div>
          
        ))
      )}
    </div>
    <p style={{textAlign:"end", padding:"1rem 3rem", fontSize:"1.5rem", fontFamily:"serif"}}>Total: ${totalAmount.toFixed(2)}</p>
    <button onClick={() => navigate("/")} style={{display:'block', width:"80%", margin:"2rem auto" ,backgroundColor:"#dc5f00", color:"white", fontWeight:500, border:"none",padding:"0.8rem", fontSize:"1.2rem", borderRadius:"0.5rem", cursor:"pointer"}}>Back to Shopping</button>
    </>
  );
};

export default UsingCart;
