//why key is imortant in li tag in react
import React from "react";

function Demo5(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
         <li key={number.toString()}>{number}</li>
    )

    return (
        <ul>{listItems}</ul>
    );
}

export default Demo5