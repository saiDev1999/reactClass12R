import { useState } from "react"


const ControlledComponents = () => {
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [userNameErr,setUserNameErr]=useState(null)



    const userNameHandler=(event)=>{
        const userName=event.target.value

        setUserName(userName)

        if(userName.trim().length>6){
            // alert("input must be less than 6")
            setUserNameErr("input must be less than 6")
        }else{
            setUserNameErr(null)
        }

        console.log(userName)

    }

    const passwordHandler=(event)=>{
        const password=event.target.value
        setPassword(password)


    }

    const handleSubmit=(event)=>{
        event.preventDefault()

        // console.log(username)
        // console.log(password)
        const userDetails={
            username:username,
            password:password,
            id:Math.random()
        }

        console.log(userDetails)

    }


    return (
        <form onSubmit={handleSubmit}  >
            <label>UserName</label>
            <input
                type="text"
                value={username}
                onChange={userNameHandler}
            />
        
        {
            userNameErr && <span style={{color:"red"}} >Invalid user name</span>
        }

            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={passwordHandler}
            />
            <button type="submit" >Submit</button>

        </form>
    )

}
export default ControlledComponents













// Controlled components are components whose state is controlled by react 
// Their state is tied to react state management

// import { useState } from "react"

// controlled components rely on react to manage and update the state 


// Steps :
// 1. Take a form (JSX)
// 2. states for input control  (using useState)
// 3. bind the state values using value attritube of the input
// 4. to control the input , we use onChange handler to the input 
// 5. Collect the user input using .target.value  with in the onChange handler


