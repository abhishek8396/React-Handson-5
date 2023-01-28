import React from 'react'
import ClickComp from './ClickComp';
import HigherOF from './HigherOF'
import "./Component.css"

const HoverComp = (props) => {
  const {Counter,UpdateCounter}=props;

  return (
<div>
    <div>
        <h1 className='heading'>HOC Hover Function</h1>
        <p className='counter'>Counter:{Counter}</p>
        <button className='btn' onMouseEnter={UpdateCounter}>Hoverplus</button>
    </div>
    <ClickComp />
    </div>
  )
}

export default HigherOF(HoverComp)
