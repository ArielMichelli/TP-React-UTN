import React from 'react'
import "./style.css"

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__der">
        <li><a href="">Home</a></li>
        </div>
        <div className="navbar__izq">
          <li><a href="">Registro</a></li>
          <li><a href="">Login</a></li>
        </div>
      </div>

    </>
  )
}
export default Header