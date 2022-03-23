import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { ReactDOM } from "react-dom";


function Multipleinputs(){
   const [inputs,setInputs] = useState({});
   const handleChange = (event) =>{
       const name = event.target.name;
       const value = event.target.value;

       setInputs(values =>({...values,[name]:value}))
   }

   const handleSubmit = (event)=>{
       event.preventDefault();
       console.log(inputs);
       alert(inputs);   
   }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Your name:
                <input 
                type="text"
                name="username"
                value={inputs.age||""}
                onChange={handleChange}/>
            </label>

            <label>Enter your age:
                <input 
                type="text"
                name="age"
                value={inputs.age||""}
                onChange={handleChange}/>
            </label>
            <input type="submit"/>
        </form>
    )
}

export default Multipleinputs;