import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/usingcartSlice";

const ProductManyList = ({product}) => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
     dispatch(addToCart(product));
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    
    <div
      className="p-4"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px", // Add gap between items
        justifyContent:"space-around",
        // margin:"auto",
        // width:"90%"
        padding:"3rem"
      }}
    >
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} style={{width:"22%"}}>
          <div
            className="p-4 border rounded shadow hover:shadow-lg"
            style={{
              width: "100%", // Adjust width for 4 items per row
              boxSizing: "border-box",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover"
              style={{
                width: "100%",
                height: "150px", // Set a fixed height
              }}
            />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductManyList;
