import React from 'react'
import Logos from './nccLabel.jpeg'
import './Blog.css'
import Navbar from '../Navbar/Navbar'
function Blog() {
    return (
        <div>
            <Navbar/>
            <div>
                <img src={Logos} alt=" "></img>
            </div>
            <div>
                <h1>Structure and Locations of NDRF</h1><br></br><br></br>
                <p>
                    The NDRF battalions are located at sixteen different locations in the country
                    based on the vulnerability profile of the country and to cut down the response
                    time for their deployment at disaster site. At present, National Disaster
                    Response Force consists of 15 battalions including the BSF, CISF, CRPF, ITBP,
                    SSB and Assam Rifles. Each battalion has 18 specialized search and rescue teams
                    of 45 personnel each including engineers, technicians, electricians, dog squads
                    and medical/ paramedics. The total strength of each battalion is 1,149. All the
                    battalions are equipped and trained to respond to natural and man-made disasters
                    and also during chemical, biological, radiological and nuclear (CBRN) emergencies.
                </p><br></br>
                <h6>The current location of NDRF Battalions are as follows:</h6>
                <br></br>
                <ol>
                    <li>Assam</li>
                    <li>West Bengal</li>
                    <li>Odisha</li>
                    <li>Tamil Nadu</li>
                    <li>Maharashtra</li>
                    <li>Gujarat</li>
                    <li>Punjab</li>
                    <li>Uttar Pradesh</li>
                    <li>Bihar</li>
                    <li>Andhra Pradesh</li>
                    <li>Uttar Pradesh</li>
                    <li>Arunachal Pradesh</li>
                    <li>Jammu and Kashmir</li>
                </ol><br></br>
                <h3>Motto of National Disaster Response Force (NDRF)</h3><br></br>
                <h5>The motto of the National Disaster Management Authority (NDMA) is
                    ‘आपदा सेवा सदैव सर्वत्र’ which implies Sustained Disaster Response Service
                    under all circumstances. The sincerity and devotion of the NDMA personnel
                    during disasters have earned them the name “Angels in Disaster” by fellow citizens.</h5>
            </div>
        </div>
    )
}

export default Blog