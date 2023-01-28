import React from 'react'
import HigherOF from "./HigherOF"
import "./Component.css"

const ClickComp = (props) => {
    const {Counter,UpdateCounter}=props;
    
  return (
    <div>
      <h1 className='heading'>HOC Click Function</h1>
        <p className='counter'>Counter:{Counter}</p>
        <button className="btn" onClick={UpdateCounter}>clickplus</button>
    </div>
  )
}

export default HigherOF(ClickComp);
