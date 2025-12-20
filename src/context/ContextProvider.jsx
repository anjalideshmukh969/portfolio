import React, {useState} from 'react'
import { AppContext } from './Context';


const ContextProvider = (props) => {
    const [darkMode, setDarkMode] = useState(true);

    const myValue = {darkMode,setDarkMode}
  return (
    <div>
        <AppContext.Provider value={myValue}>
            {props.children}
        </AppContext.Provider>
    </div>
  )
}

export default ContextProvider

