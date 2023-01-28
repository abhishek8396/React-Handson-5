import React, { useState } from 'react'
import "./Component.css"

const HigherOF = (WrappedComponent) => {
    function HigherOF(){
    const[Counter,setCounter]=useState(0)
    const UpdateCounter=()=>{
        setCounter(Counter+1)
    }
  return (
    <div>
<WrappedComponent Counter={Counter} UpdateCounter={UpdateCounter} />
    </div>
  )
}
return HigherOF
}
export default HigherOF;