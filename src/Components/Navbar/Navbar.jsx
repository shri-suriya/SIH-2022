import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div class="topnav">
          <Link to="/App"><a id="h1" href="#">NCC CONNECT</a></Link>
          <a href="#">About</a>
          <Link to ="/Register"><a href="#">Register</a></Link>
          <Link to="/Login"><a href="#">Login</a></Link>
          <Link to="/Contact"><a href="#">Contact</a></Link>
          <a href="#">Weather</a>
          <Link to ="/Blog"><a href="#">Blog</a></Link>
          <Link to="/App"><a href="#">Home</a></Link>
        </div>
  </div>
  )
}

export default Navbar