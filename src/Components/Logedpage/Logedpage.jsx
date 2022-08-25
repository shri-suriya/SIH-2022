import React from 'react'
import './Logedpage.css'
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
                <input type="submit" className="submit"></input>
            </form>
        </div></>
    )
}

export default Logedpage