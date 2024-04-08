import { useState } from "react"


const UseStateEx2=()=>{
    const [fruits,setFruits]=useState(["apple","banana"])


    const addFruit=()=>{
        const newFruits=[...fruits,"new fruit"]
        setFruits(newFruits)

    }

    return(
        <>
        
        <h3>useState example 2</h3>
        <button onClick={addFruit} >Add fruit</button>
        {
            fruits.map((value,index)=><h4 key={index} >{value}</h4>)
        }

        </>
    )
}

export default UseStateEx2



