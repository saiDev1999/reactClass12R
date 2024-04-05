import { Component } from "react";






class Unmount extends Component{
    state={
        isVisible:true
    }

    changeHandler=()=>{
        this.setState(
            {
                isVisible:!this.state.isVisible
            }
        )
    }
    render(){
        return(
            <>
            <h3>Unmount example</h3>
            <button onClick={this.changeHandler} >Click to remove child</button>

     
            {
                this.state.isVisible ? <Child/>: <h1>No child found</h1>
            }


            </>
        )
    }
}
export default Unmount



class Child extends Component{
    componentWillUnmount(){
        //clean up 
        alert("componentWillUnmount")
    }
    render(){
    return(
        <>
        <h3>Child visible</h3>
        </>
    )
    }
}


