//class 
import React , {Component} from 'react'

class Counter extends React.Component{
constructor(){
  super();
  this.state={
counter : 10,
timer:0,
intervall:null
  }
}
//parincrement=(t=>{
//partie ajout 
inrement=()=>{
  this.setState({
    counter :  this.state.counter+5,
   
  })
  console.log('counter',this.state.counter)
}

componentDidMount(){
  console.log('tla3et c bon')
  this.setState({
    intervall:setInterval(
      ()=>this.setState({timer:this.state.timer +1}),1000
    )
  })
}


render(){
  return(
    <div>
      <h1>class compoenent</h1>
<p>counter = {this.state.counter} </p>
      <button  onClick={()=>this.inrement()} >plus</button>
      <button>moins</button>
      <button>reset</button>
      <p>{this.state.timer}</p>
    </div>
  )
}

}

export default Counter