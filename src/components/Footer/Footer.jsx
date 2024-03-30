import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
       
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

       
        <div className={styles.verticalSection}>
          <div className={styles.name}>Bruno Reis</div>
          <p className={styles.rights}>@ All rights reserved by <span className={styles.cenas}>cenas</span></p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

