// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToUser = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome to the Home Page</h1>
      <button onClick={() => goToUser(1)} style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}>
        Go to User 1
      </button>
      <button onClick={() => goToUser(2)} style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}>
        Go to User 2
      </button>
    </div>
  );
}

export default Home;
