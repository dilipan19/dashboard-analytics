import { Link } from "react-router-dom";
import "./Navbar.scss"

function NavBar() {

  return (
    <>
        <div className="navbar">
          <div className="tabs">
            <ul>
              <li>
                <Link to="/">
                Home
                </Link>
                </li>
              <li>
                <Link to="/dashboard">
                Dashboard
                </Link>
                </li>
              <li>
                <Link to="/about">
                About
                </Link>
                </li>
            </ul>
            </div>
        </div>
    </>
  )
}

export default NavBar