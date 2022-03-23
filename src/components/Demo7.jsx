//useEffect hook
import React,{useEffect, useState} from 'react'
import axios from "axios";

function Demo7() {
    const [data,setData] = useState("");
    useEffect(()=>{
        axios
         .get("https://jsonplaceholder.typicode.com/comments")
         .then((response)=>{
             setData(response.data[0].email);
             console.log('hey');
         });    
         console.log('i am');
         //if [] use then run for one time
    },[])
  return (
    <div>{data}</div>
  )
}

export default Demo7
