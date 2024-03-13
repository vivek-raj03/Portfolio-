import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="myname">Vivek</div>
        <div className="options">
            <ul className="options-list">
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
            </ul>
        </div>
        <div className="contact">Contact</div>
        <div className='hamburger'>
            <a href='#'><GiHamburgerMenu></GiHamburgerMenu></a>
        </div>
    </div>
    
    </>
  )
}

export default Navbar