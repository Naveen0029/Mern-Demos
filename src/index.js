//  import React from 'react' 
//  import ReactDOM  from 'react-dom';
//  import Form from './components/Form'
//  import Football from './components/Football'
//  import Multipleinputs from './components/Multipleinputs'

// class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount(){
//         this.timerId = setInterval(
//             ()=> this.tick(),
//             1000
//         );
//     }

//     componentWillUnmount(){
//         clearInterval(this.timerId);
//     }

//     tick(){
//         this.setState({
//             date:new Date()
//         });
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Hello,World!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// )

// const cars = ['Ford',' Bmw','Audi'];
// ReactDOM.render(
//     <Multipleinputs />,
//     document.getElementById('root')
// )


// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));



// import { useState } from "react";
// import ReactDOM from "react-dom";

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });
  
//   const updateColor = () => {
//     setCar((previousState) => {
//         return { ...previousState, color: "blue" }
//       });

//     //    setCar(previousState => ({ ...previousState, color: "blue" }))
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }

// ReactDOM.render(<Car />, document.getElementById('root'));

import React from 'react'
import Demo20 from './components/Demo20'
import ReactDOM from 'react-dom'
 import store from './store';
import {Provider} from 'react-redux'

store.subscribe(()=>{ console.log(store.getState());})
console.log(store.getState());
const numbers = [1,2,3,4,5];
ReactDOM.render(
   <Provider store={store}>
      <Demo20 />
   </Provider>
   ,
    document.getElementById('root'));