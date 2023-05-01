import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Work />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
