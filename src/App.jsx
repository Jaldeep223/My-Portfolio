import React, { useState } from 'react';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import './App.scss';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map(section => (
            <button
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>

      <footer>
        <p>© 2025 Jaldeep Patel. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

