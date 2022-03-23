//cleanUp in useEffect
import React from 'react'
import {useState,useEffect} from 'react'

function Demo17() {
    const [width,setWidth] = useState(window.screen.width);

    const actualWidth = ()=>{
        console.log(window.innerWidth);
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize",actualWidth);

        return () =>{
            window.removeEventListener("resize",actualWidth);
            //if this not done then browser fill with lots of data
            //see elements -> eventListener -> resize
        }
    })
  return (
    <div>
        <h1>The actual size of the window is:</h1>
        <h2>{width}</h2>
    </div>
  )
}

export default Demo17
