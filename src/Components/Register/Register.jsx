import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Register.css'
function Register() {
    return (
        <div>
            <Navbar/>
            <h2>Register</h2><br></br>
            <div className='login'>
                <form id="login" >
                    <label><b> Name</b></label><br></br>
                    <input type="text" name="Uname" id="Username" placeholder="Username"></input>
                    <br></br><br></br>
                    <label><b>password</b></label><br></br>
                    <input type="password" name="Pass" id="pass" placeholder="password"></input>
                    <br></br><br></br>
                    <label><b>Address</b></label><br></br>
                    <input type="text" name="Pass" id="address" placeholder="Address"></input>
                    <br></br><br></br>
                    <label><b> Ph No</b></label><br></br>
                    <input type="number" name="Uname" id="Number" placeholder="number"></input>
                    <br></br><br></br>
                    <label><b>Email</b></label><br></br>
                    <input type="email" name="Pass" id="Email" placeholder="email"></input>
                    <br></br><br></br>
                    <label><b> Batch </b></label><br></br>
                    <input type="text" name="Uname" id="Batch" placeholder="Batch"></input>
                    <br></br><br></br>
                    <label><b>NCC id </b></label><br></br>
                    <input type="text" name="Pass" id="Ncc" placeholder="NCC id"></input>
                    <br></br> <br></br>
                    <button type="button" id="log">Click Me</button>
                    <br></br>
                    <br></br>

                </form>
            </div>
        </div>
    )
}

export default Register