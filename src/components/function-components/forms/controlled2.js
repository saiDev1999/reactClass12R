import { useState } from "react"


const ControlledComponents2 = () => {

  const [formErrors,setFormErrors]=useState(
    {
        usernameErr:null,
        passwordErr:null
    }
  )

    const[form,setForm]=useState(
        {
            username:null,
            password:null

        }
    )

    const onChangeHandler=(event)=>{

        const {value,name}=event.target
        console.log(value,name)

        setForm(prevState=>({
            ...prevState,[name]:value
        }))
       

        switch(name){
            
            case "username":
                if(value.length>6){
                    setFormErrors(
                        {...formErrors,usernameErr:"enter less than 6"}

                    )
                    // errObj.userNameErr="enter less than 6"
                    // setFormErrors(errObj)

                }
                break
                case "password":
                    if(value.length>6){
                        setFormErrors(
                            {...formErrors,passwordErr:"enter less than 6"}
    
                        )

    
                    }
                    break
                default : 

                break
                
        }
  




        // event.target.value




    }

    const handleSubmit=(event)=>{
        event.preventDefault()

        // console.log(username)
        // console.log(password)
        // const userDetails={
        //     username:username,
        //     password:password,
        //     id:Math.random()
        // }

        // console.log(userDetails)

    }


    return (
        <form onSubmit={handleSubmit}  >
            <label>UserName</label>
            <input
                type="text"
                value={form.username}
                onChange={onChangeHandler}
                name="username"
            />
        
        {
           formErrors.usernameErr  && <span style={{color:"red"}} >Invalid user name</span>
        }

            <label>Password</label>
            <input
                type="password"
                value={form.password}
                onChange={onChangeHandler}
                name="password"
            />
            {
           formErrors.passwordErr  && <span style={{color:"red"}} >Invalid Password </span>
        }
            <button type="submit" >Submit</button>

        </form>
    )

}
export default ControlledComponents2

// Tasks:
// 0. Repeat the class 
// 1. Registration form using controlled components (individual states and single state)
// 2. Validations and show the errors in the ui 
// 3. apply the styling , registration and login 













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


