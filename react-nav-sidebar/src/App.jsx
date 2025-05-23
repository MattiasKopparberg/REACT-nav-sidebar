import { useState, useEffect } from "react";
import Hamburger from "./Components/Hamburger";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/sideBar";
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setMenuOpen(false);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <>
      <div className="topnav">
        <h1 id="title">Welcome To My Page</h1>
        <Hamburger toggleSidebar={toggleMenu} />
        <Navbar isOpen={menuOpen} />
      </div>

      <Sidebar isOpen={menuOpen} />
    </>
  );
}

export default App;
