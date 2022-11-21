import '../../css/profil.css'
import Navbar from "../../components/Navbar/Navbar"
import getMockedActivity from '../../mock/MockedActivity'
import getMockedUser from '../../mock/MockedUser'
import getMockedAverageSessions from '../../mock/MockedAverageSessions'
import getMockedPerformance from '../../mock/MockedPerformance'
import getFetchedActivity from '../../fetch/fetchActivity'
function Weight() {
    return (
        <div className='weight_graphic'>
            <div className='weight_graphic__header'>
                <p>Activité quotidienne</p>
                <ul className='legend'>
                    <li id='weight'>Poids (kg)</li>
                    <li id='calories'>Calories brulées (kCal)</li>
                </ul>
            </div>
            <div className='weight_graphic__content'>

            </div>
        </div>
    )
}

function Objective() {
    return (
        <div className='objective_graphics square_graphic'>

        </div>
    )
}

function Radar() {
    return (
        <div className='radar_graphic square_graphic'>

        </div>
    )
}

/**
 * KPI (key performance indicator)
 */
function KPI() {
    return (
        <div className='KPI square_graphic'>

        </div>
    )
} 


let test = getFetchedActivity(12)
console.log(test)

function Profil() {
    return (
        <main className="profil">
            <Navbar />
            <div className='profil__main'>
                <div className='title'>
                    <h1>Bonjour</h1><h2>Thomas</h2>
                </div>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

                <div className='board'>
                    <div className='board__graphics'>
                        <Weight />
                        <div className='board__graphics__square_graphics'>
                            <Objective />
                            <Radar />
                            <KPI />
                        </div>

                    </div>
                    <div className='board__energies'>

                    </div>
                </div>
            </div> 
        </main>
        
        
    )
}
 
export default Profil