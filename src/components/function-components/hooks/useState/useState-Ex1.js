import { useState } from "react"




const UseStateExample1 = () => {

    const [count, setCount] = useState(10)

   // this function is to handle the increment , decrement and rest functualities 
    const changeHandler = (value, type) => {
        if (type === "increment") {
            setCount(count + value)
        } else if (type === "decrement") {
            setCount(count - value)
        } else {
            setCount(0)
        }
    }

    return (
        <>
            <h3>useState example</h3>
            <h3>{count}</h3>
            <button onClick={
                () => changeHandler(10, "increment")
            }  >Increment count</button>
            <button onClick={
                () => changeHandler(10, "decrement")
            }  >Decrement count</button>
            <button onClick={
                () => changeHandler()
            }  >Reset count</button>
        </>

    )

}

export default UseStateExample1


