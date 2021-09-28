import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/Add';
import { data2 } from './DataBaseTwo'
import "./Screen1.css"
import logo from "./Images/Eye.png"
import "./Collapse.css"
import Switch from '@mui/material/Switch';
import Item from './Item';
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>

    {

    data2.map((props)=>

    
      <Accordion expanded={expanded === props.panel} onChange={handleChange(props.panel)} style={{minHeight: "59px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="Add_icon"/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         
         <div>
         <span className="role1">  {props.role}</span>
        

{
  (props.number===2) ?
  <button className="btnGrey pos1">{props.button}</button> 
  :(
    (props.number===3)?
    <button className="btn2 pos1">{props.button}</button>
    :
    <button className="btn pos1">{props.button}</button>

  )



}
         <span className="members pos2">{props.summary}</span>
              <span className="minute pos3">{props.last} min ago</span>
{/* <img src={logo} className="eye" /> */}
<div  className="toggle">{
(props.switch===1)?
<Switch  defaultChecked style={{color:'2ECA45'}}/>
:
<Switch style={{color:'white'}} disabled   />
}
</div>

{/* <Switch  color="secondary" className="toggle"  /> */}

         </div>
        </AccordionSummary>
        <AccordionDetails>
        <div>
        <Item/>
         </div>
        </AccordionDetails>
      </Accordion>
)
    }
     
    </div>
  );
}
