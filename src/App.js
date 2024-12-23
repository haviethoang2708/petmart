import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Pets from './components/Pets';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AboutUs />
        <Pets />
        <Shop />
        <Contact />
        <Footer />
      
      </main>
    </div>
  );
}

export default App;
