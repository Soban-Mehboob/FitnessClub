import { useState } from "react";
import { Link } from "react-router-dom";
import { CiDumbbell } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa"; // Add icons for the mobile menu

export default function Navbar() {
  const [click, setClick] = useState(false); // State to manage the mobile menu visibility

  const handleClick = () => setClick(!click); // Toggle the menu
  const closeMobileMenu = () => setClick(false); // Close the menu on link click

  return (
    <nav className="w-full border-b-2 border-rose-600 bg-white shadow-md">
      <div className="navbar-container flex justify-between items-center max-w-screen-lg mx-auto p-4">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <CiDumbbell className="text-3xl text-rose-600" />
          <h2 className="text-xl font-bold">
            Fitness<span className="text-rose-600">Club</span>
          </h2>
        </Link>
        <div className="md:hidden" onClick={handleClick}>
          {click ? <FaTimes className="text-3xl text-rose-600" /> : <FaBars className="text-3xl text-rose-600" />}
        </div>
        <ul className={`flex-col md:flex md:flex-row md:space-x-4 absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent md:p-0 ${click ? 'flex' : 'hidden'} md:flex`}>
          <li className="hover:text-rose-600 p-4 md:p-0">
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="hover:text-rose-600 p-4 md:p-0">
            <Link to="/membership" onClick={closeMobileMenu}>Membership</Link>
          </li>
          <li className="hover:text-rose-600 p-4 md:p-0">
            <Link to="/trainers" onClick={closeMobileMenu}>Trainers</Link>
          </li>
          <li className="hover:text-rose-600 p-4 md:p-0">
            <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
