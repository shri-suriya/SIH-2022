import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div class="topnav">
    <a id="h1" href="#">NCC CONNECT</a>
    <a href="#">About</a>
    <a href="#">Register</a>
    <Link to="/Login"><a href="#">Login</a></Link>
    <a href="#">Contact</a>
    <a href="#">Weather</a>
    <a href="#">Blog</a>
    <Link to="/App"><a href="#">Home</a></Link>
  </div>
    </div>
  )
}

export default Navbar