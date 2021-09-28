import React from 'react'
import UpperLeft from './UpperLeft'
import LowerLeft from './LowerLeft'
function Left({showTable,Show,Show2}) {
    return (
        <div>
            <UpperLeft/>
            <LowerLeft showTable={showTable} Show={Show} Show2={Show2} />
        </div>
    )
}

export default Left
