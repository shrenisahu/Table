import React from 'react'
import "./Item.css"
const Item = () => {
    return (
        <div>
          <span className="head1">All aspects in the bidding module</span> 

          <div>

          <span className="head2">Access Control</span> 

          <div >
          <br/>
          <input type="radio"  className="radio2"/>
<span className="access1">All Access</span>
<span className="sub-topic"> Can access all items</span>
          </div>

          <div >
          <br/>
          <input type="radio"  className="radio3"/>
<span className="access3">Restricted Access </span>
<span className="sub-topic1"> Can access only assigned or created items</span>
          </div>

         

<div className="line"></div>
          </div>



<div className="sub-div2">
<span className="">Permission</span><br/>
<div>

<span> <input type="checkbox"  />View items in access</span><br/>

<span><input type="checkbox"  />Edit items in access</span><br/>
<span><input type="checkbox"  />Create items in access</span><br/>
<span><input type="checkbox"  />Delete items in access</span><br/>
</div>

</div>








        </div>
    )
}

export default Item
