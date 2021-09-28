import React from 'react'
import "./Screen1.css"
import { data } from './Database'
import logo from "./Images/Eye.png"
import add from "./Images/add_24px.png"
import logo2 from "./Images/delete_24px.png"
import edit from "./Images/edit_24px.png"

const Screen1 = ({showTable,Show,Show2}) => {
    return (
        <div>
            <button className="add">
            <img src={add} className="add-logo" />
            <span className="add-text">Add Role</span></button>

            


            <img src={edit} className="pen22" /  >
            <img src={logo2} className="pen33"/>





          <div className="tb1">
          <div className="div22" style={{height:"60px"}} >
             
             <span className="role">Deparment/Role Name</span>
               <span className="access-level">Access Level</span>
               <span className="members member1"> No of membersl</span>
               <span className="minute  member33"> Last Updated</span>
 <img src={logo} className="eye " />
               </div>






          {
              data.map((props)=> 
              <div className="div33" style={{height:"60px"}}  onClick={Show2}>
            <span className="role">  {props.role}</span>
              <input type="radio"  className="radio"/>
              {
                  (props.number===1)?<button className="btn  btn3"
                  onClick={Show2}>{props.button}</button>:<button className="btn2  btn3"                   onClick={Show2}  >{props.button}</button>
              }
              <span className="members   ">{props.members}</span>
              <span className="minute btn4">{props.last} min ago</span>
<img src={logo} className="eye  " />
              </div>)
          }
           
    
        </div>
        </div>
    )
}

export default Screen1
