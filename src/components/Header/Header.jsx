import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import styles from './Header.module.css';
import Popup from "./Popup.jsx"

const Header = () => {
  const location = useLocation(); 
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.name}>Bruno Reis</div>
        <nav className={styles.nav}>
          <ul className={styles.links}>
            <li>
              <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>About</Link>
            </li>
            <li>
              <Link to="/works" className={location.pathname === '/works' ? styles.active : ''}>Works</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>Contact</Link>
            </li>
          </ul>
        </nav>
        <button className={styles.button} onClick={handleButtonClick}>Let's talk</button>
      </div>
      {showPopup && <Popup onClose={handleClosePopup} />}
    </header>
  );
};

export default Header;
