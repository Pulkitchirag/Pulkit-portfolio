import './App.css';
import './index.css';
import Home from './component/sections/Home'
import About from './component/sections/About'
import Projects from './component/sections/Projects'

import { useState } from 'react';
import { Navbar } from './component/Navbar';
import { MobileMenu } from './component/MobileMenu';
import { LoadingScreen } from './component/LoadingScreen';
import { Contact } from './component/sections/Contact';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <div className="min-h-screen bg-black text-gray-100 transition-opacity duration-700 opacity-100">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          {menuOpen && (
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          )}
          <main className="pt-16">
            <Home />
          </main>
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
