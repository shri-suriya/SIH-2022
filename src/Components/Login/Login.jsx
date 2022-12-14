import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Login.css'
import {Link} from 'react-router-dom'

function Info(){
  
}
function Login() {
  return (
    <div>
        <Navbar/>
        <h2>Login</h2>
        <div className='login'>
            <form id='login'>
            <label><b>User Name</b></label> <br></br>
            <input type="text" name="Uname" id="username" placeholder="Username"></input><br></br><br></br>
            <label><b>Password</b></label><br></br>
            <input type="Password" name="Pass" id="password" placeholder="Password"></input><br></br><br></br>
            <Link to="/Logedpage" className="btn btn-primary">Sign Up</Link><br></br><br></br>
            <input type="checkbox" id="check"></input>
            <span>Remember me</span><br></br>
            <a class="forget" href="#"> Forget Password</a><br></br>
            </form>
        </div>

    </div>
  )
}

export default Login