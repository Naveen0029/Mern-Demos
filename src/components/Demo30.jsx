//useContext practice
import React from 'react'
import {createContext} from 'react'
import Demo31 from './Demo31';
import {useState} from 'react'

export const AppContext= createContext(null);

const Demo30 = () => {
    const [input,setInput] = useState("");
  return (
    <AppContext.Provider value={{input,setInput}}>
        <Demo31 />
    </AppContext.Provider>
  )
}

export default Demo30

