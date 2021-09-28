import React ,{useState}from 'react'
import { data2 } from './DataBaseTwo'
import "./Screen1.css"
import "./Screen2.css"
import logo2 from "./Images/Arrow.png"
import ControlledAccordions from './Collapse'
import logo3 from "./Images/Eye.png"

import edit from "./Images/edit_24px.png"
const Screen2 = () => {
    const [height,setHeight]=useState({height:60})
    const Increase=()=>{
        setHeight({height:100})
    }
    return (
        <>
        <img src={logo2} className="arrow" /  >
          <span className="mTeam">Management Team</span>
          <img src={edit} className="pen" /  >



<span className="sub-control">Access Control</span>
<span className="sub-control1">Assiged Members</span>
<div className="hr1"></div>
<div className="hr2"></div>


<div className="tb2">
          
          <div className="div22" style={{height:"60px"}} >
           
           <span className="role">Deparment/Role Name</span>
             <span className="access-level">Access Level</span>
             <span className="members member1"> Summary</span>
             <span className="minute  member33"> Last Updated</span>

             </div>
        <ControlledAccordions/>
         
  
      </div>

       
        </>
    )
}

export default Screen2
