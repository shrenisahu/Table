import React, { useState } from 'react'
import logo from "./Images/MainLogo.png"
import logo2 from "./Images/dashboard_24px.png"
import logo3 from "./Images/business.png"
import logo4 from "./Images/security_24px.png"

import "./Right.css"
function Right({showTable,Show}) {
    const[bg,setBG]=useState({color:""});
    const Change=()=>{
        setBG({color:'#E1D8F1'})
        console.log("l")
    }
    
    return (
        <div>
            
            <img src={logo} />

            <div className="div1">
            <div className="div2">
            <img src={logo2} className="dashboard" />
            <h3 className="Projects">Projects</h3>
            </div>
            </div>

            <div className="div1">
            <div className="div2">
            <img src={logo3} className="dashboard" />
            <h3 className="Projects2">Organization Profile</h3>
            </div>
           </div>

           <div className="div1 bgColor" onClick={Show}  style={{backgroundColor:`${bg.color}`}}>
            <div className="div2" onClick={Change} >
            <img src={logo4} className="dashboard" />
            <h3 className="Projects3">Access Control</h3>
            </div>
           </div>



        </div>
    )
}

export default Right
