import './App.css';
import Sai from './components/function-components/button/button';
import ButtonComponent from "./components/class-components/button"
import CustomImage from './components/function-components/image/image';
import ListComponent from './components/function-components/list/list';

function App() {
  return (
    <div className="App">
      <ListComponent/>

    </div>
  );
}

export default App;

// 1. default --> default export can be called with anyname
// 2. named export

// what is jsx : 


// rules :
// 1. every component must contain a single parent 
// 2. jsx should write in a curly braces
// 3. class must be replaced with className(class based components )
// 4. every attributes must be camelCase 






// Tasks:
// 0. repeat the class
// 1. create any 5 components in react (image,button,tables,list,fomrs)
// 2. why react compared with other , reasons behind instagram to choose react 
// 3. advantages and limitations of react



// React team always suggesting to implement the functional based components for more simplicity and redability 

// React 2013 :

// 1. class components --> container layer
// 2. functional components --> presentational layer 

// 2018 react major update (16.8)(hooks)

// 1. functional components --> container layer + presentational layer 


// Features of react :
// 1. component based approach 
// 2. v-dom 
// 3. jsx
// 4. unidirectional data - flow

// advg :
// 1. huge community 
// 2. wide library support 
// 3. re-usability prinicple
// 4. single page application 

// limitations :
// 1. react is just a library , it only focus on performing rich ui , it Doesn't focus on data fetching,routing
// 2. Jsx syntax complexity


// layers in web site :
// 1. presentational layer -> only UI
// 2. container layer -> functional layer 


// es 6 features :
// 1. let const 
// 2. arrow functions
// 3. destrcuturing
// 4. spread operator and rest operators
// 6. oops (class)
// 7. promises / async and await 
// 8. arry methods (map,filter,reduce,find)
// 9. string templates 
// 10. ternany opearator etc
