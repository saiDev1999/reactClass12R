import CustomCard from "../reactBootstrap/card"




const FirstPage=()=>{
    return(
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
      <CustomCard 
      loaderVisible={true}
      imageURL={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
      name={"Veerash"} description={"Some quick example text to build on the card title and make up the bulk of the card's content"} />
      </div>
      <div className="col-sm-4">
       <CustomCard name={"swamy"} 
       loaderVisible={false}
             imageURL={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}

       description={"Some quick example text to build on the card title and make up the bulk of the card's content"}/>
      </div>
      <div className="col-sm-4">
       <CustomCard  name={"bhagya"} 
       loaderVisible={false}
             imageURL={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}

       description={"Some quick example text to build on the card title and make up the bulk of the card's content"} />
      </div>
    </div>
  </div>
</>

    )
}

export default FirstPage