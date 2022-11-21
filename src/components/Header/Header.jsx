import logo from "../../assets/logo.svg"
import "../../css/header.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
        <img src={logo} alt='Logo' />
        <div className="header__menu">
            <Link to='/Home'>Accueil</Link>
            <Link to='/Profil'>Profil</Link>
            <Link to='/Settings'>Réglage</Link>
            <Link to='/Community'>Communauté</Link>
        </div>
    </header>
  );
}

export default Header;