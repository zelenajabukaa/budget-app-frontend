import './Header.css'
import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className="header">
                <h1 className="title">Budget App</h1>
                <div className="burgerMenu" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </header>
            {menuOpen && (
                <nav className="dropdown">
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="einnahmen">Einnahmen</a></li>
                        <li><a href="ausgaben">Ausgaben</a></li>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Header
