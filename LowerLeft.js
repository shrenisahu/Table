import React,{useState} from 'react'
import Screen1 from './Screen1'
import { data } from './Database'
import Screen2 from './Screen2'
const LowerLeft = ({showTable,Show,Show2}) => {
    const[screen2,setScreen2]=useState(false)
    
    return (
        <div>
       {
showTable===2 ?   <Screen1 showTable={showTable} Show={Show}  Show2={Show2} />
:(showTable===3 ? <Screen2/>:null)
       }
          

          
        </div>
    )
}

export default LowerLeft
