import React from 'react'
import "./UpperLeft.css"
import wifi from "./Images/wifi.png"
import logo from "./Images/Table_36px.png"
import logo2 from "./Images/sync.png"
import logo3 from "./Images/Oval.png"
import logo4 from "./Images/help.png"
import logo5 from "./Images/notifications_24px.png"
const UpperLeft = () => {
    return (
        <div>
           <div className="permit">
           <img src={wifi}  />
          <span className='span'>Permission</span> 
           
           <div className=" purple-line"></div>
           </div>
           <div className="line33"></div>

           <div className="table-view">
           <img src={logo}  />
<span className="span2">Approval Matrix</span>
           </div>

<div>
<img src={logo3}  className="oval"/>
    <span className="Kishore">Kishore</span>

    <img src={logo5} className="notification" />
    <img src={logo4} className="help" />
</div>


           <div>
           <img src={logo2} className="sync" />
               <span className="last">Last synced 15 mins ago</span>
           </div>
        </div>
    )
}

export default UpperLeft
