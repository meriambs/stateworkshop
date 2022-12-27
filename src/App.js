import React, { Component } from 'react'
import Counter from './Components/Counter'
import Counter1 from './Components/Counter1'
export class App extends Component {
  constructor() {
    super();
    this.state={
show:false
    }
  }
  toggel=()=>{
    this.setState({
      show : ! this.state.show
    })
    console.log(this.state.show)
  }
  render() {
    return (
      <div>
        <h1> i will show and hide a component </h1>
<button onClick={()=>this.toggel()}  >{ this.state.show ? 'khabi' : 'beyen'  }</button>

{
  this.state.show ? (<Counter/>) : (<h1>nothing to show</h1>)
}

      </div>
    )
  }
}

export default App