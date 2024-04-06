import { Component } from "react";
import ChildCompo from "./child";




class ParentCompo extends Component{
    state={
        count:0
       }
    
       incrementCount = (event)=>{
    
        this.setState(
            {
                count:this.state.count+event
            }
        )
       }
       decrementCount = ()=>{
        if(this.state.count>0){
            this.setState(
                {
                    count:this.state.count-1
                }
            )
    
        }
      
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
            <h4   style={{color:this.props.color}}  >{this.state.count}</h4>
      
            <button  onClick={()=>this.incrementCount(1)} >Increment count</button>
            <button  onClick={()=>this.incrementCount(10)} >Increment count by 10</button>
            <button  onClick={this.decrementCount} >Decrement count</button>
            <button  onClick={this.resetCount} >Reset count</button>
            <ChildCompo  />
            </>

        )
    }
}

export default ParentCompo



// Pure component prevents re-renders 


// if we use pure component it will render only when its prop or state change 


// Generally, In ReactJS, we use the shouldComponentUpdate() Lifecycle method to customize the default behavior and implement it when the React component should re-render or update itself.

// When working with React pure components, we can utilize their behavior to optimize behavior as pure components automatically handle the shouldComponentUpdate() method and we don’t need to explicitly implement it.