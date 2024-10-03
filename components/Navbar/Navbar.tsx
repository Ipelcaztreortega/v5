'use client';
import React, {useState} from 'react'
import styles from './Navbar.module.css';
import { pages } from '../../data/portfolio';
import MenuIcon from '@mui/icons-material/Menu'; // This icon is used for the mobile menu
import CloseIcon from '@mui/icons-material/Close'; // This icon us used to close the mobile menu


function Navbar() {

    // Keeps track if the menu is open or not
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Running this function whenever the user clicks on the menu icon
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navLogo}>
                <h1>Navbar</h1>
            </div>

            {/* If menu is open then the close icon shows else the hamburger will show */}
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>

            {/* If menu is open then the showMenu class will be added to the navLinkContainer */}
            <div className={`${styles.navLinkContainer} ${isMenuOpen ? styles.showMenu : ''}`}>
                <ul className={styles.navLinks}>
                    {pages.map((page, index) => (
                        <li className={styles.navLink} key={index} onClick={() => setIsMenuOpen(false)}>{page}</li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
