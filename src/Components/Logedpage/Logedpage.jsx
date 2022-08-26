import React from 'react'
import './Logedpage.css'
import {Link} from 'react-router-dom'
function Logedpage() {
    return (
        <><h2>Alert Notify</h2><br></br><div className='alert'>
            <form id="alert">
                <label><b> Alert Area</b></label><br></br>
                <input type="text" name="Alert" id="Alertarea" placeholder="Alertarea"></input>
                <br></br><br></br>
                <label for="org">Alert Level</label><br></br>
                <select id="org" name="org">
                    <option value="Red">RED</option>
                    <option value="Yellow">YELLOW</option>
                    <option value="Orange">ORANGE</option>
                </select><br></br><br></br>
                <label><b>Address</b></label><br></br>
                <input type="text" name="Pass" id="address" placeholder="Address"></input>
                <br></br><br></br>
                <Link to="/Details" className="btn btn-primary">Submit</Link><br></br><br></br>
            </form>
        </div></>
    )
}

export default Logedpage