import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-root">
          <Navbar />
          <main id="main-content">
            <Hero />
            <About />
            <Services />
            <WhyUs />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

