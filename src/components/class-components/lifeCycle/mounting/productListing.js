import { Component } from "react";
import axios from "axios"
import "./index.css"
import CustomSpinner from "../../../function-components/spinner/spinner";

class ProductListing extends Component {

    state={
        products:[]
    }

    componentDidMount(){

        this.fetchData()

    }

    // fetchData =()=>{
    //     fetch("https://dummyjson.com/products")
    //     .then(response=>response.json())
    //     .then(response=>console.log(response))
    // }

     fetchData = async() =>{
        // let result=await fetch("https://dummyjson.com/products")
        // let result1=await result.json()
        // console.log(result1)

        // axios
       const result =await axios.get("https://dummyjson.com/products")
    //    console.log(result)

    this.setState({
        products:result.data.products
    })

    }

  render() {
    console.log(this.state.products,"log from render")
    return (
      <>
        <h4>Product Listing</h4>

        {
            this.state.products.length>0
            ?
            <div className="productList" >
            {
                this.state.products.map(eachObject=>{
                    const {description,title,thumbnail,price}=eachObject
                    return(
                        <div className="cards" >
                        <h3>{title}</h3>
                        <h4>{description}</h4>
                        <img src={thumbnail} alt={title} width={200} height={200} />
                        <h5 style={{color:"red"}} >₹{price}</h5>
                        </div>
                    )
                })
            }
            </div>
            :
          <CustomSpinner/>
        }
      </>
    );
  }
}
export default ProductListing;


// axios : axios is a third party library which makes 
// efficient http req having more advanatages compared with fetch 
// advnatges :
// 1. automatic json conversion 
// 2. status code differenciation for sucess and failure cases of api 
