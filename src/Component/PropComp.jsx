import React, { PureComponent } from 'react'
import "./Component.css"

class PropComp extends PureComponent {
render(){
    console.warn("Prop Component Check-Rendering")
    return (
        <div>
            <h1 className='heading'>Prop Component rendered by Pure Component</h1>
            <p className='counter'>Counter:{this.props.count}</p>
        </div>
      )
}
}

export default PropComp