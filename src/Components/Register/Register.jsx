import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Register.css'
function Register() {
    return (
        <div>
            <Navbar />
            <h2>Register</h2><br></br>
            <div className='register' >
                <form id="register" >
                    <label><b> Name</b></label><br></br>
                    <input type="text" name="Uname" id="Username" placeholder="Name"></input>
                    <br></br><br></br>
                    <label><b>Gender</b></label><br></br>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label for="html">Male</label><br></br>
                    <input type="radio" id="css" name="fav_language" value="CSS"></input>
                    <label for="css">Female</label>
                    <br></br>
                    <label><b>Address</b></label><br></br>
                    <input type="text" name="Pass" id="address" placeholder="Address"></input>
                    <br></br><br></br>
                    <label><b> Ph Number</b></label><br></br>
                    <input type="number" name="Uname" id="Number" placeholder="Ph Number"></input>
                    <br></br><br></br>
                    <label><b>Email</b></label><br></br>
                    <input type="email" name="Pass" id="Email" placeholder="Email"></input>
                    <br></br><br></br>
                    <label for="org">Organisations</label><br></br>
                    <select id="org" name="org">
                        <option value="ncc">NCC</option>
                        <option value="nss">NSS</option>
                        <option value="ngo">NGO</option>
                        <option value="yrc">YRC</option>
                        <option value="scouts">SCOUTS</option>
                        <option value="rover "> ROVER SCOUTS</option>
                    </select><br></br><br></br>
                    <label><b> Age </b></label><br></br>
                    <input type="number" name="Uname" id="Batch" placeholder="Age"></input>
                    <br></br><br></br>
                    <label><b>District </b></label><br></br>
                    <input type="text" name="Pass" id="Ncc" placeholder="District"></input>
                    <br></br> <br></br>
                    <label><b>State </b></label><br></br>
                    <input type="text" name="Pass" id="Ncc" placeholder="State"></input>
                    <br></br> <br></br>
                    <label><b>Date of Birth </b></label><br></br>
                    <input type="date" name="Pass" id="Ncc" placeholder="username"></input>
                    <br></br> <br></br>
                    <label><b>Proffesion </b></label><br></br>
                    <input type="text" name="Pass" id="Ncc" placeholder="Proffesion"></input>
                    <br></br> <br></br>
                    <input type="submit"></input>
                    <br></br>
                    <br></br>

                </form>
            </div>
        </div>
    )
}

export default Register