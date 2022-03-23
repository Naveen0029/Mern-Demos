//Dynamic watch using useEffect Hook
import React from 'react'
import {useState,useEffect} from 'react'

const Demo21 = () => {
    let [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        console.log('I am in console');
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1)
    },[time])//use let for making dynamic clock 
    //not work when using const
  return (
    <div>
        {console.log('i am render')}
      <h1>{time}</h1>
    </div>
  )
}

export default Demo21

//in class component componentDidMount work differently then
//useEffect so that why we uses setInterval in class component