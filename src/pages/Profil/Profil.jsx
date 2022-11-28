import '../../css/profil.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'

import getFetchedActivity from '../../fetch/fetchActivity'
import getFetchedAverage from '../../fetch/fetchAverage'
import getFetchedMain from '../../fetch/fetchMain'
import getFetchedPerformance from '../../fetch/fetchPerformance'
import getFetchedUser from '../../fetch/fetchedUser'

function MockedProfil() {
    const [activity, setActivity] = useState(null)
    const [average, setAverage] = useState(null)
    const [main, setMain] = useState(null)
    const [performance, setPerformance] = useState(null)
    const [user, setUser] = useState(null)
    const [cards, setCards] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                getFetchedActivity(id, setActivity)
                getFetchedAverage(id, setAverage)
                getFetchedMain(id, setMain, setCards)
                getFetchedPerformance(id, setPerformance)
                getFetchedUser(id, setUser)
            } catch (error) {
                console.log('error', error)
            }
        }

        fetchData()
    }, [id])

    return (
        <main className="profil">
            <Navbar />
            <div className="profil__main">
                <div className="profil__main__title">
                    <h1>Bonjour</h1>
                    <h2>{user}</h2>
                </div>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

                <div className="charts">
                    <div className="charts__left">
                        {activity}
                        <div className="square_charts">
                            {average}
                            {performance}
                            {main}
                        </div>
                    </div>
                    <div className="charts__right">{cards}</div>
                </div>
            </div>
        </main>
    )
}

export default MockedProfil
