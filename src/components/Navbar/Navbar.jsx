import '../../css/navbar.css'
import logo_relax from '../../assets/relax.svg'
import logo_swimming from '../../assets/swimming.svg'
import logo_ride_bike from '../../assets/ride_bike.svg'
import logo_bodybuilding from '../../assets/bodybuilding.svg'

/**
 * Component for displaying the profil page navbar
 *
 * @returns The navbar of the profil page
 */
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__item">
                    <img src={logo_relax} alt="Relaxation" />
                </div>
                <div className="navbar__item">
                    <img src={logo_swimming} alt="Natation" />
                </div>
                <div className="navbar__item">
                    <img src={logo_ride_bike} alt="Cyclisme" />
                </div>
                <div className="navbar__item">
                    <img src={logo_bodybuilding} alt="Musculation" />
                </div>
            </div>
            <p>Copiryght, SportSee 2020</p>
        </nav>
    )
}
