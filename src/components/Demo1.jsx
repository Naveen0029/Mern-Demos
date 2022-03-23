//useState hook
import React from 'react'
import { useState } from 'react';

function Demo1(){
    const [count,setCount]=useState(0);

    const changeIt = (()=>{
        console.log('i am here');
        //const would not work with it


         setCount(()=>{//this not work because we are not
            //creating new reference or can say updating
            // const that not possible
              count=count+1;
              return count;
         })
         
        // console.log(setCount);
        // setCount((count)=>count+1)
    })
    return(
        <>
        <h1>{count}</h1>
        <button type="button" onClick={changeIt}>Click Me!</button>
        </>
    );
};

export default Demo1; 