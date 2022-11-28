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
    const [isError, setIsError] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                getFetchedActivity(id, setActivity, setIsError)
                getFetchedAverage(id, setAverage, setIsError)
                getFetchedMain(id, setMain, setCards, setIsError)
                getFetchedPerformance(id, setPerformance, setIsError)
                getFetchedUser(id, setUser, setIsError)
            } catch (error) {
                setIsError(true)
            }
        }

        fetchData()
    }, [id])

    const loading = (
        <div className="profil__loading">
            <h1>
                Chargement<p>...</p>
            </h1>
        </div>
    )

    const fetchError = (
        <div className="profil__loading">
            <h1 className="profil__loading__error">
                Erreur lors de la récuperation des données
            </h1>
        </div>
    )

    const page = (
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
    )

    function isLoaded() {
        if (
            cards === null ||
            user === null ||
            performance === null ||
            average === null ||
            main === null ||
            activity === null
        ) {
            return loading
        }
        return page
    }

    return (
        <main className="profil">
            <Navbar />

            {isError ? fetchError : isLoaded()}
        </main>
    )
}

export default MockedProfil
