import React, { Fragment } from "react"


const ListItems =(sai)=>{
    console.log(sai)
    return(
        <React.Fragment >
        <li>
       {sai.item.name}
        </li>
       
        </React.Fragment>

    )
}
export default ListItems

// React Fragments:
// avoids the unnecassary shared parent for the components , which makes the dom lighweighted
// performance will increases , 

// 2 ways of creation of Fragment

// 1. <></>
// 2. <React.Fragment></React.Fragment>