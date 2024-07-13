// src/App.js
import React from 'react';
import Scrollbar from 'react-scrollbars-custom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Memberships from './components/Memberships';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import './App.css'; 

function App() {
  return (
    <div className='bg-black text-white'>
    <Scrollbar style={{ height: '100vh' }}>
      <Navbar />
      <Home />
      <About />
      <Memberships />
      <Contact />
      <Footer />
      
    </Scrollbar>
    </div>
  );
}

export default App;
