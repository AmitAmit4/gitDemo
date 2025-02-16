import React from 'react'
import { Link } from 'react-router-dom'

const MyNavigation = () => {
  return (
    <>
      <nav style={{ padding: "1rem", background: "#f4f4f4" }}>
        <Link to="/" style={{ margin: "0 1rem" }}>
          Home
        </Link>
        <Link to="/user/1" style={{ margin: "0 1rem" }}>
          User 1
        </Link>
        <Link to="/user/2" style={{ margin: "0 1rem" }}>
          User 2
        </Link>
      </nav>
    </>
  )
}

export default MyNavigation