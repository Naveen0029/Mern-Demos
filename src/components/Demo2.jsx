import React,{useState} from 'react'

function Demo2({parentCallback}){
    let [inputText,changeText] = useState('Naveen');
    

    let changeIt=(e)=>{
        let text=e.target.value;
        changeText(text);
        parentCallback(e.target.value);
    }
    return (
        <>
        <input type="text" placholder="please type here"  
        onChange={changeIt}/>
        <h2>{inputText}</h2>
        </>
    );
}

export default Demo2;