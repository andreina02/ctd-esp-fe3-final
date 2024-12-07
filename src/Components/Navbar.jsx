import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css';
import { useDentistState } from '../Context/Context';

const Navbar = () => {
  const { state, dispatch } = useDentistState();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={styles.navbar}>
    
        <Link to="/">
        <h4>Home</h4>
        </Link>

        <Link to="/contact">
        <h4>Contact</h4>
        </Link>

        <Link to="/favs">
        <h4>Favorite</h4>
        </Link>
        <button className={styles.themeButton} onClick={toggleTheme}>{state.theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
     
    </nav>
  )
}

export default Navbar