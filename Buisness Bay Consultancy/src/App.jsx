import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));

function App() {
  return (
    <div>
      
      <div>
        <Navbar/>
        <Suspense fallback={<div style={{padding:'2rem', textAlign:'center'}}>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
