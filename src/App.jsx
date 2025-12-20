import React from 'react'
import "./App.css"
import { useContext } from 'react'
import { AppContext } from './context/Context'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../src/components/Home"



function App() {
  const {darkMode} = useContext(AppContext )
  console.log("darkMNode initially in App.jsx: ",darkMode," ");
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App