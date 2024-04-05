
import axios from "axios";
import { Component } from "react";





class UpdatingCounter extends Component{
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

   static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps")

    return null
     
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    return true
  }

  componentDidMount(){
    document.title=`React app ${this.state.count}`
  }

  componentDidUpdate(){
    document.title=`React app ${this.state.count}`
    this.fetchData()
  }
  fetchData = async() =>{
   

    // axios
   const result =await axios.get("https://dummyjson.com/products")


}

getSnapshotBeforeUpdate(props,state){
    console.log(state)
    return null
}


    render(){
        console.log("render")
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
export default UpdatingCounter
