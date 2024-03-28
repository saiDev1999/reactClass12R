import ListItems from "./listItems"


const ListComponent =()=>{

   const listItems=[{
    name:"apple",
    type:"fruit",
    isFruit:true,
    imageURL:"",

    id:1
   },{
    name:"mango",
    type:"fruit",
    isFruit:true,
    imageURL:"",
    id:2
   },
   {
    name:"potato",
    type:"vegetable",
    isFruit:false,
    imageURL:"",
    id:3
   }
]

    return(
        <div>
            <ol>
                {/* <ListItems/> */}
                {
                    listItems.map((eachObject)=>{
                        return(
                            <ListItems  name={eachObject.name}  />
                        )
                    })

                }

            </ol>

        </div>
    )
}

export default ListComponent

// attribute: additional info to element 
// prop : additional info to component , (sharing the data between the components)
// prop is an object 


// tasks :
// 1. Repeat the class 
// 2. using props display the images in the ui (use only one img tag)
// 3. react documentation research on the first 5 contents(describing the ui)
// 4. create a table components display the content 