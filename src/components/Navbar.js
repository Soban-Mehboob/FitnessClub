import { Link } from "react-router-dom";
import { CiDumbbell } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="w-full border-b-2 border-rose-600 bg-white shadow-md">
      <div className="navbar-container flex justify-between items-center max-w-screen-lg mx-auto p-4">
        <Link to="/" className="flex items-center space-x-2">
          <CiDumbbell className="text-3xl text-rose-600" />
          <h2 className="text-xl font-bold">
            Fitness<span className="text-rose-600">Club</span>
          </h2>
        </Link>
        <ul className="flex space-x-4">
          <li className="hover:text-rose-600">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-rose-600">
            <Link to="/membership">Membership</Link>
          </li>
          <li className="hover:text-rose-600">
            <Link to="/trainers">Trainers</Link>
          </li>
          <li className="hover:text-rose-600">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
