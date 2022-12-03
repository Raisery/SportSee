import logo from '../../assets/logo.svg'
import '../../css/header.css'
import { Link } from 'react-router-dom'

/**
 * Component for displaying header bar
 *
 * @returns The header of the page
 */
export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" />
            <div className="header__menu">
                <Link to="/Home">Accueil</Link>
                <Link to="/Profil/12/">Profil</Link>
                <Link to="/Settings">Réglage</Link>
                <Link to="/Profil/mock/12">Communauté</Link>
            </div>
        </header>
    )
}
