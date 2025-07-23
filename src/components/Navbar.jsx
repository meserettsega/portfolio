import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaBars, FaTimes } from 'react-icons/fa';
import '../Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleTheme = () => {
    document.body.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <div className="logo">MB723</div>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Home
        </NavLink>
        <NavLink
          to="/skills"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </NavLink>

        <button className="mode-toggle" onClick={toggleTheme}>
          <FaSun />
        </button>
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Navbar;
