import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div class="topnav">
          <Link to="/App"><a id="h1" href="#">COMMUNITY CONNECT</a></Link>
          <Link to ="/Register"><a href="#">Register</a></Link>
          <Link to="/Login"><a href="#">Login</a></Link>
          <Link to="/App"><a href="#">Home</a></Link>
        </div>
  </div>
  )
}

export default Navbar