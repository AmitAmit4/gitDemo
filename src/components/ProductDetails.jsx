import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/usingcartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4" style={{margin:"auto", textAlign:"center"}}>
        <img src={product.image} alt={product.title} className="w-full h-96 object-cover" style={{width:"45%", height:"45%"}}/>
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-600">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <p className="mt-4 text-sm text-gray-500">Category: {product.category}</p>
          <p className="mt-2 text-sm text-gray-500">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
