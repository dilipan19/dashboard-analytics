import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Dashboard from "../pages/Dashboard/Dashboard"
import About from "../pages/About/About"

function Approutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    
  )
}

export default Approutes