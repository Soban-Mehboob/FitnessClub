import React, { useState } from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full transparent p-4 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <a href="#home" className="flex items-center text-2xl font-bold text-white">
          <FaDumbbell className="text-red-500" />
          <span className="ml-2">Fitness<span className="text-red-500">Club</span></span>
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-red-500 transition duration-300 hover:border-b-2 border-red-500">Home</a>
          <a href="#about" className="text-white hover:text-red-500 transition duration-300 hover:border-b-2 border-red-500">About</a>
          <a href="#memberships" className="text-white hover:text-red-500 transition duration-300 hover:border-b-2 border-red-500">Memberships</a>
          <a href="#contact" className="text-white hover:text-red-500 transition duration-300 hover:border-b-2 border-red-500">Contact</a>
        </div>
        <button
          className="md:hidden text-2xl text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <AiOutlineClose className="text-white" /> : <AiOutlineMenu className="text-white" />}
        </button>
      </div>
      <div className={`md:hidden fixed top-0 right-0 w-64 h-screen transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4 bg-black">
            <FaDumbbell className="text-white text-2xl " />
            <button onClick={toggleMenu} className="text-white">
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>
          <ul className="space-y-4">
            <li><a href="#home" className="block text-white transition duration-300 hover:border-b-2 border-red-500" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="block text-white transition duration-300 hover:border-b-2 border-red-500" onClick={toggleMenu}>About</a></li>
            <li><a href="#memberships" className="block text-white transition duration-300 hover:border-b-2 border-red-500" onClick={toggleMenu}>Memberships</a></li>
            <li><a href="#contact" className="block text-white transition duration-300 hover:border-b-2 border-red-500" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
