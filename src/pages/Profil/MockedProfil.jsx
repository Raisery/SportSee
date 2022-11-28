import '../../css/profil.css'
import { useParams } from 'react-router-dom'

import getMockedActivity from '../../mock/MockedActivity'
import getMockedMain from '../../mock/MockedMain'
import getMockedAverageSessions from '../../mock/MockedAverageSessions'
import getMockedPerformance from '../../mock/MockedPerformance'

import Navbar from '../../components/Navbar/Navbar'
import ActivityChart from '../../components/ActivityChart/ActivityChart'
import AverageChart from '../../components/AverageChart/AverageChart'
import PerformanceChart from '../../components/PerformanceChart/PerformanceChart'
import ScoreChart from '../../components/ScoreChart/ScoreChart'
import StatCard from '../../components/StatCard/StatCard'

function getAllUserInfos(id) {
    const main = getMockedMain(id)
    const activity = getMockedActivity(id)
    const averageSessions = getMockedAverageSessions(id)
    const performance = getMockedPerformance(id)

    return { main, activity, averageSessions, performance }
}

function MockedProfil() {
    const { id } = useParams()

    const user = getAllUserInfos(id)

    return (
        <main className="profil">
            <Navbar />
            <div className="profil__main">
                <div className="profil__main__title">
                    <h1>Bonjour</h1>
                    <h2>{user.main.userInfos.firstName}</h2>
                </div>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

                <div className="charts">
                    <div className="charts__left">
                        <ActivityChart data={user.activity} />

                        <div className="square_charts">
                            <AverageChart data={user.averageSessions} />
                            <PerformanceChart data={user.performance} />
                            <ScoreChart data={user.main} />
                        </div>
                    </div>
                    <div className="charts__right">
                        {user.main.keyData.map((stat) => (
                            <StatCard key={stat.label} data={stat} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MockedProfil
