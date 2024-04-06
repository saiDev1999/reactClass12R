import ButtonComponent from "./components/class-components/button";
import ProductListing from "./components/class-components/lifeCycle/mounting/productListing";
import Unmount from "./components/class-components/lifeCycle/unmounting/unMount";
import UpdatingCounter from "./components/class-components/lifeCycle/updating/counter";
import ParentCompo from "./components/class-components/pureComponent/parent";
import FirstPage from "./components/function-components/styling/bootstrap/firstPage";
import CustomText from "./components/function-components/styling/custom-text";
import CustomCard from "./components/function-components/styling/reactBootstrap/card";
import styles from "./components/function-components/styling/styles.module.css"



function App() {
  return (
    <>
      {/* <ProductListing  favcol={"red"}  /> */}
      {/* <UpdatingCounter/> */}
      {/* <Unmount/> */}
      {/* <ParentCompo color={"red"} /> */}
      <ProductListing/>
    </>
  )

}

export default App;



// 1. repeat the class (CRUD OPERATIONS ON STATE USING SETSTATE)
// 2. Perform crud on array of objects 
// 3. Style the Content using external
// 4. take few examples on Map, forEach, filter, reduce(take array of objects)




