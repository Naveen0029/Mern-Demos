//useReducer hook
import React,{useReducer} from 'react'
const reducer = (state,action) => {
    switch(action.type){
        case "Increment":
          return {count: state.count+1,showText:state.showText};
        case "toggleShowText":
            return {count:state.count,showText:!state.showText};
        default:
            return state;
    }
}
function Demo6(){
    const [state,dispatch] = useReducer(reducer,{count:0,showText:true})
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>{
                dispatch({type:'toggleShowText'})}}>Click Me!
            </button>
            {state.showText&&<p>My name is naveen</p>}

        </div>
    )
}

export default Demo6;