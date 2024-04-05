




// Human life cycle :
// earth 

// 1. Born stage 
// 2. Survival stage 
// 3. Expiry stage 


// Component life cycle :
// dom 

// 1. Mounting (born stage) phase 

// 1. constructor 
// 2. render (to insert the jsx elements inside the dom we need render method)
// 3. component did mount 

//     to perform the side effeects during mouting phase we use component did mount in class based components

//     side effeects:
//     1. http request (api calls)
//     2. dom manipulation
//     3. event listeners 
// 4. derivedStateFromProps : to initialize the state based on the props we use derivedStateFromProps





// when ever elements inserted inside the dom 

// 2. Updating phase 

// when ever component or elements updated in the dom 

// 1. render
// 2. getderivedStateFromProps
// 3. shouldComponentUpdate , this method denotes whether the component needs to update or not (returns boolean value) by default it is true
// 4. componentDidUpdate , to perform side effects in the updating phase we use componentDidUpdate 
// whenver component state or props changed this method invokes
// 5. getSnapShotBeforeUpdate

// 3. Unmounting phase 

// when ever component or elements removed from the dom 
// 1. component will unmount

// this method cleans up the data , initializes the state and props

// for preventing memory leaks in the app we use this method
