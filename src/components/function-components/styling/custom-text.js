import "./custom-text-styles.css"
import "../../../App.css"
import styles from "./styles.module.css"

const CustomText = ()=>{
    const textStyle=  {
        color:"red",
        backgroundColor:"green"

    }
    return(
        <>
    
        {/* <h4  style={
            textStyle
          
        } >Hello world</h4>
        <h4 className="text">Hello world external</h4>
        <h4 className="text">Hello world external</h4>
        <h4 className="customText">Hello world external</h4> */}
        <h4 className={styles.h4Text}>Hello world module style</h4>
            </>
    )
}

export default CustomText