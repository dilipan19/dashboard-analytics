import Approutes from "./routes/Approutes"
import './App.css'
import NavBar from "./components/layout/Navbar/navBar"

function App() {


  return (
    <>
    <NavBar />
    <div className="page">
      <Approutes />
      </div>
    </>
  )
}

export default App
