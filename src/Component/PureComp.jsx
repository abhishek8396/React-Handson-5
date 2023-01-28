import React, { PureComponent } from 'react'
import PropComp from './PropComp';
import "./Component.css"
class PureComp extends PureComponent {
    constructor(){
        super();
        this.state={
            count:1
        }
    }
    
  render() {
    return (
      <div>PureComp
        <PropComp count={this.state.count} />
        <button className='btn' onClick={()=>this.setState({count:this.state.count+1})}>Update Pure Count</button>
      </div>
    )
  }
}
export default PureComp