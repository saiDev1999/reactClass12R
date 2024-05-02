import { employees } from "./list"

const ListShow = ()=>{
    const filterQuery="react developer"
    const filterArry=(query)=>{
       return employees.filter(value=>value.designation==query)

    }
    return(
        <>
        {

filterArry("react developer").map(value=><>
            <h4>Name :{value.name}</h4>
            <h4>Designation: {value.designation}</h4>
            <h4>Salary : {value.salary}</h4>
            </>
            )
            

        }
        {

filterArry("angular developer").map(value=><>
    <h4>Name :{value.name}</h4>
    <h4>Designation: {value.designation}</h4>
    <h4>Salary : {value.salary}</h4>
    </>
    )

        }
        
        </>
    )
}
export default ListShow

// 1. Props 
// 2. general prop and children prop
// 3. conditional rendering (if/else and ternary operator and short circuit)
// 4. filtering the list using filter and map in react 



// tasks :
// 1. repeat the class
// 2. filter the list items based on the salary and designation
// 3. take a list of objects contains fruits and vegetable, using conditional render show the list items 