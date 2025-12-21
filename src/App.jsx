import React from 'react'
import "./App.css"
import { useContext } from 'react'
import { AppContext } from './context/Context'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../src/components/Home"

function App() {
  const { darkMode } = useContext(AppContext)
  console.log("darkMode initially in App.jsx: ", darkMode, " ");
  return (
    <div className={`max-w-screen ${darkMode ? "common-bg" : "bg-white"} ${darkMode ? "text-white" : "text-black"} `}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App