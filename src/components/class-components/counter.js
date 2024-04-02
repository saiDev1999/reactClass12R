import { Component } from "react";





class Counter extends Component{
   state={
    count:0
   }

   incrementCount = (event)=>{
    console.log(event)
    this.setState(
        {
            count:this.state.count+event
        }
    )
   }
   decrementCount = ()=>{
    this.setState(
        {
            count:this.state.count-1
        }
    )
   }
   resetCount = ()=>{
    this.setState(
        {
            count:0
        }
    )
   }

    render(){
        return(
            <>
            <h3>Counter example</h3>
            <h3>Count {this.state.count}</h3>
            <button  onClick={()=>this.incrementCount(1)} >Increment count</button>
            <button  onClick={()=>this.incrementCount(10)} >Increment count by 10</button>
            <button  onClick={this.decrementCount} >Decrement count</button>
            <button  onClick={this.resetCount} >Reset count</button>
            </>
        )
    }
}
export default Counter
