import { Component } from "react";
import Counter from "./counter";

class ButtonComponent extends Component{
    state={
        isSubscribe:false,
        text1:"Subscribe",
        text2:"Subscribed"
    }
    changeSubscribe=()=>{
        console.log("clicked")
        this.setState(
            {
                isSubscribe: !this.state.isSubscribe

            }
        )

    }
   render(){
        return(
            <div>
                <button style={{
                    color: this.state.isSubscribe ? "red":"green"
                }} onClick={this.changeSubscribe}   >{this.state.isSubscribe ?this.state.text2:this.state.text1}</button>

                {
                    this.state.isSubscribe
                    ?
                    <>
               
                    <h3>Wellcome user</h3>
                    <Counter/>
                    </>
                    :
                    <h3>Please subscribe to see the content</h3>
                    
                }
            </div>
        )
    }
}

export default ButtonComponent

// state is mutable 
// state is asynchronous 
// we can change the state using setState method in react class based components 
// whenever state change occurs component has to re-render to show updated ui
// component state should only update  using setState , we should not assign any values directly



// render :
// render is method in a class based to return the jsx

// extends :
// to inherit the properties and methods from parent class 