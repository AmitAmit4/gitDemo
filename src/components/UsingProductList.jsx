import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/usingcartSlice";

const UsingProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4" style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-around", padding: "3rem" }}>
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded shadow hover:shadow-lg product-type" style={{ width: "22%",marginBottom:"1rem",textAlign:"center" }}>
          <Link to={`/product/${product.id}`} key={product.id} style={{width:"22%"}}>
          <img src={product.image} alt={product.title} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          </Link>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default UsingProductList;
