import { useRef, useState } from "react"





const UncontrolledInput = ()=>{
    const userNameRef =useRef("")
    const passwordRef=useRef("")
    const [errorVisible,setErrorVisible]=useState(false)
    const [fruits,setFruits]=useState([])

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("user submitted")

        const userInput=userNameRef.current.value
        const passwordInput=passwordRef.current.value

        if(userInput.length<5 && passwordInput.length<5){
            // errorVisible="hello"
            setErrorVisible(true)
            // alert("User name and password must be greter than 5")
        }else{
            const newObj={
                username:userInput,
                password:passwordInput
            }
            setErrorVisible(false)
            console.log("submit form",newObj)
        }


    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={userNameRef}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={passwordRef}
    />
  </div>
  {errorVisible && <span style={{color:"red"}} >User name and password must be greter than 5</span>}
  <div className="form-check mb-3">
    {/* <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label> */}
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>


        </div>
    )
}

export default UncontrolledInput


// Uncontrolled : dom 

// useRef :

// it can be used to store the mutable value of object that does not cause re-render when updated 
// It can be used to access DOM directly 
// useRef hooks is an object which having current properties , which we can manage the entire input 


// Steps :
// 1. take a form
// 2. collect the input -> use the useRef to create a reference with dom ant attach with input 
//   to collect the user input we will use reference.current.value



// Task :

// 1. Repeat the class 
// 2. collect the user input using uncontrolled components show in UI
// 3. Registration form (after filling all the details show in table )







