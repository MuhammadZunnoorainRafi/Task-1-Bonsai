import { useState } from 'react';
import FAQ from './components/FAQ';
import FooterLast from './components/FooterLast';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="dark:bg-gray-900 dark:text-gray-100">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Pricing />
        <FAQ />
        <FooterLast />
      </div>
    </div>
  );
}

export default App;
