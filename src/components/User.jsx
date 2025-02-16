// User.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>User Details</h1>
      <p>User ID: {id}</p>
      <button style={{padding:"0.5rem 1.25rem"}} onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default User;
