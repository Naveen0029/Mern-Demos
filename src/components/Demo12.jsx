//useMemo
import React from 'react'
import {useState,useEffect,useRef,useMemo} from 'react'

function Demo12() {
    const [Number,setNumber] = useState(1);
    const [inc,setInc] = useState(0);
    
    //const sqrt = getSqrt(Number);

    const sqrt = useMemo(()=>getSqrt(Number),[Number])

    const renders = useRef(1);

    useEffect(()=>{
       renders.current= renders.current+1;
    })


    let onClick = ()=>{
        setInc((prev)=>{
            return prev+1;
        });
    }

  return (
    <div>
        <input type='number' value={Number} 
        onChange={(e)=>setNumber(e.target.value)} />
        <h2>The sqrt of {Number} is {sqrt}</h2>
        <button type='submit' onClick={onClick}>Re Render</button>
      <h1>{renders.current}</h1>
      
    </div>
  )
}

function getSqrt(n){
    for(let i=0;i<=10000;i++){
        console.log(i);
    }
    console.log('Expensive function is called');

    return Math.sqrt(n);
}

export default Demo12

//if we are not using useMemo then clicking on Re Render 
//runs the  getSqrt function which costs us

//use memo calls the function and returns the result 
//when dependencies change
