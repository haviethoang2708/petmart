import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Pets from './components/Pets';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

