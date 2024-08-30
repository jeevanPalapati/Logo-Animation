import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const NavBar = () => {
  return (
    <div className='nav'>
         <Link to={"/normal"}>1</Link>
      <Link to={"/"} >2</Link>
     
    </div>
  )
}

export default NavBar
