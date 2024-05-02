import { DNA, FallingLines } from "react-loader-spinner"

const CustomSpinner=()=>{
    return(
//         <DNA
//   visible={true}
//   height="80"
//   width="80"
//   ariaLabel="dna-loading"
//   wrapperStyle={{}}
//   wrapperClass="dna-wrapper"
//   />
<FallingLines
//   color="red"
  width="200"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
    )
}
export default CustomSpinner