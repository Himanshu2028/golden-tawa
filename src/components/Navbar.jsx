import { useState } from "react";
import logo from "../assets/golden-tawa-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="navbar-logo">
       <img
        src={logo}
        alt="The Golden Tawa Co."
        />
        </a>

        <nav className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#story" onClick={closeMenu}>Our Story</a>
          <a href="#why-us" onClick={closeMenu}>Why Us</a>
          <a href="#franchise" onClick={closeMenu}>Franchise</a>
        </nav>

        <div className="navbar-actions">

          <a
             href="https://link.zomato.com/xqzv/rshare?id=1482788413056335d"
            className="navbar-button"
            target="_blank"
            rel="noopener noreferrer"
            >
            Order Now
            </a>

          <button
            className="navbar-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;