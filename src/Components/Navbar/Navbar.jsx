import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div class="topnav">
          <Link to="/App"><a id="h1" href="#">COMMUNITY CONNECT</a></Link>
          <Link to ="/About"><a href="#">About</a></Link>
          <Link to ="/Register"><a href="#">Register</a></Link>
          <Link to="/Login"><a href="#">Login</a></Link>
          <Link to="/Contact"><a href="#">Contact</a></Link>
          <Link to ="/Weather"><a href="#">Weather</a></Link>
          <Link to ="/Blog"><a href="#">Blog</a></Link>
          <Link to="/App"><a href="#">Home</a></Link>
        </div>
  </div>
  )
}

export default Navbar