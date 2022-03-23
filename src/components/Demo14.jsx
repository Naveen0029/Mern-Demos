import React from 'react'
import {useState} from 'react'

function Demo14() {
   
    const todos=[
        {
            id:1,
            username:"naveen",
            lastname:'Bishnoi'
        },
        {
            id:2,
            username:"parveen",
            lastname:"Kumar"
        }
    ]
    const [array,setArray] = useState(todos);
    let remoElm = (id) =>{
        const newArray=array.filter((todo)=>{
            return todo.id!=id;
        })

        setArray(newArray);
    }
  return (
    <>
        {
            array.map((todo)=>{
                return (<>
                       <h1 key={todo.id}>{todo.id}
                       <button onClick={()=>remoElm(todo.id)}>remove</button></h1>
                        {/*arrow function must be used while calling remoElm
                        if not then it would giver alert for all todos without 
                        clicking  */}
                       <p>{todo.username}</p>
                       </>);
            })
        }
      
    </>
  )
}

export default Demo14
