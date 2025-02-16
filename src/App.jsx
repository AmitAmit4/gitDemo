import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import User from "./components/User";
// import MyNavigation from "./components/MyNavigation";
// import ProductManyList from "./components/ProductManyList";
import ProductDetails from "./components/ProductDetails";
import UsingCart from "./components/UsingCart";
import UsingProductList from "./components/UsingProductList";
import { useSelector } from "react-redux";

function App() {
  const totalQuantity = useSelector((state) => state.usingcart.totalQuantity);
  return (
    // <Router>
    //   <MyNavigation/>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/user/:id" element={<User />} />
    //   </Routes>
    // </Router>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ProductManyList />} />
    //     <Route path="/product/:id" element={<ProductDetails />} />
    //   </Routes>
    // </Router>
    <Router>
      <div>
        <nav style={{ padding: "10px", backgroundColor: "#f5f5f5", marginBottom: "20px", display:"flex" }}>
          <Link to="/" style={{ marginRight: "20px", textDecoration: "none" }}>Products</Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>Cart {totalQuantity > 0 && `(${totalQuantity})`}</Link>
        </nav>

        <Routes>
          <Route path="/" element={<UsingProductList />} />
          <Route path="/cart" element={<UsingCart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
