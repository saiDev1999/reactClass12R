import { Component } from "react";
import Counter from "./counter";

class ButtonComponent extends Component{
    // state={
    //     isSubscribe:false,
    //     text1:"Subscribe",
    //     text2:"Subscribed",
    //     fruits:["banana","apple"]
    // }


    // constructor :
    // it is method which is used to initialize the state  and bind the events in class based components 

    constructor(){
        super()

        this.state={
                   isSubscribe:false,
        text1:"Subscribe",
        text2:"Subscribed",
        fruits:["banana","apple"]


        }

    }





    changeSubscribe=()=>{
        console.log("clicked")
        this.setState(
            {
                isSubscribe: !this.state.isSubscribe

            }
        )

    }

    addFruit=()=>{
        const newFruits=[...this.state.fruits,"new Fruit"]
        // console.log(newFruits)
        this.setState(
            {
                fruits:newFruits
            }
            ,()=>{
                console.log(this.state.fruits,"inside setState")

            }
        )

        console.log(this.state.fruits,"outside setState")
    }

    deleteFruit=(index)=>{
        console.log(index)
        const newFruits=this.state.fruits.filter((eachFruit,i)=>i!==index)
        console.log(newFruits)

        this.setState({
            fruits:newFruits
        })




    }

    updateFruit=(index)=>{

        const newFruits=this.state.fruits.map((eachElement,i)=>{
            if(i===index){
                return "PineApple"
            }else{
                return eachElement
            }
        })
        this.setState(
            {
                fruits:newFruits
            }
        )

        console.log(newFruits)

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
                    <button onClick={this.addFruit} >Add fruit</button>
                    <ol>

               
                    {
                        this.state.fruits.map((eachElement,index)=>{
                            return(
                                <>
                           

                                <li>
                                    {eachElement}
                    

                                </li>
                                <button onClick={()=>this.deleteFruit(index)} >delete</button>
                                <button onClick={()=>this.updateFruit(index)} >Update</button>
                                </>
                            )
                        })
                    }
                         </ol>
                    </>
                    :
                    <h3>Please subscribe to see the content</h3>
                    
                }
            </div>
        )
    }
}

export default ButtonComponent

// CRUD :

// 1. Create 
// 2. READ 
// 3. update 
// 4. delete 

// Tasks:
// 1. Class repeat 
// 2. Take a state (array) with fruits , give add fruit option , add the dummy fruit , show in ui 
// 3. delete the fruit 
// 4. state and setState (online blogs) 

// state is mutable 
// state is asynchronous 
// we can change the state using setState method in react class based components 
// whenever state change occurs component has to re-render to show updated ui
// component state should only update  using setState , we should not assign any values directly



// render :
// render is method in a class based to return the jsx

// extends :
// to inherit the properties and methods from parent class 