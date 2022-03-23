import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

const Demo26 = () => {
    const [data,setData] = useState({hits: []});
    console.log(data);
    useEffect(()=>{
        const fetchData = async()=>{
            const result = 
            await axios(
                'http://www.regcheck.org.uk/api/reg.asmx/CheckIndia?RegistrationNumber={HR20AA8508}&username=Rai0029');
            setData(result);
        }
        fetchData();
    },[])
  return (
    <div>
    
    </div>
  )
}

export default Demo26
