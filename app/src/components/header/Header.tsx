import './Header.css'
import {useState} from 'react'
import {BankFilled} from "@ant-design/icons";

type HeaderProps = {
    title?: string
}

function Header({title}: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <header className="header">
                <div className="burgerMenu" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <h1 className="title">
                    <a href="/#">{title ? title : 'Budget App'} <BankFilled/></a>
                </h1>
            </header>
            {menuOpen && (
                <nav className="dropdown">
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="earnings">Einnahmen</a></li>
                        <li><a href="expenses">Ausgaben</a></li>
                    </ul>
                </nav>
            )}
        </>
    )
}

export default Header
