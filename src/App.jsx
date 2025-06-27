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
        <section style={{ display: activeSection === 'about' ? 'block' : 'none' }}>
          <About />
        </section>
        <section style={{ display: activeSection === 'skills' ? 'block' : 'none' }}>
          <Skills />
        </section>
        <section style={{ display: activeSection === 'experience' ? 'block' : 'none' }}>
          <Experience />
        </section>
        <section style={{ display: activeSection === 'education' ? 'block' : 'none' }}>
          <Education />
        </section>
        <section style={{ display: activeSection === 'projects' ? 'block' : 'none' }}>
          <Projects />
        </section>
        <section style={{ display: activeSection === 'contact' ? 'block' : 'none' }}>
          <Contact />
        </section>
      </main>

      <footer>
        <p>© 2025 Jaldeep Patel. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


