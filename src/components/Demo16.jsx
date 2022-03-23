//Dependenices in useEffect
import {useState,useEffect} from 'react'

import React from 'react'

function Demo16() {
    let [count,setCount] = useState(0);
    let [count2,setCount2] = useState(0);


    useEffect(()=>{
        console.log('i am count');
        count=count+1;
    },[])//it runs only when count is empty

    useEffect(()=>{
        console.log('i am count2');
        count2=count2+1;
    },[count2])


    let handleChange = () =>{
        setCount(count+1);
        setCount2(count2+1);
    }
  return (
    <div>
        <h1>count:{count}</h1>
        <h2>count2:{count2}</h2>
        <button type='submit' onClick={handleChange}>Click Me!</button>
      
    </div>
  )
}

export default Demo16
