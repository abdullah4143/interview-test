import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import './App.css'
const App = () => {
  return (
    <div className="main">
      <Sidebar /> 
      <Home />
    </div>
  )
}

export default App