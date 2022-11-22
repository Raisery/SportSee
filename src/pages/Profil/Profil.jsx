import '../../css/profil.css'
import Navbar from "../../components/Navbar/Navbar"
import getMockedActivity from '../../mock/MockedActivity'
import getMockedMain from '../../mock/MockedMain'
import getMockedAverageSessions from '../../mock/MockedAverageSessions'
import getMockedPerformance from '../../mock/MockedPerformance'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { useParams } from 'react-router-dom'


function ActivityGraphic({activity}) {
    return (
        <div className='activity_graphic'>
            <p className='activity_graphic__title'>Activité quotidienne</p>
            <BarChart width={835} height={320} data={activity.sessions} barCategoryGap="35%" barGap={8}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                    dataKey="formattedDay"
                    tickLine={false}
                    axisLine={{stroke: '#DEDEDE'}} 
                    tickMargin={15} />
                <YAxis 
                    orientation='right'
                    yAxisId='right'
                    dataKey="kilogram" 
                    domain={['dataMin-1', 'dataMax+1']} 
                    allowDecimals={false}
                    axisLine={false}
                    tickLine={false} 
                    tickCount={10}
                    allowDataOverflow={true}/>
                <YAxis 
                    yAxisId='left'
                    dataKey="calories" 
                    domain={[dataMin => (dataMin - dataMin), 'dataMax+50']}
                    hide={true} />
                <Tooltip />
                <Legend verticalAlign='top' align='right' iconType='circle' iconSize='8' wrapperStyle={{ top: '-20px'}}/>
                <Bar yAxisId='right' dataKey="kilogram" fill="#282D30" unit="kg"/>
                <Bar yAxisId='left' dataKey="calories" fill="#E60000" unit="kCal"/>
            </BarChart>
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

function getAllUserInfos(id) {
    const main = getMockedMain(id)
    const activity = getMockedActivity(id)
    const averageSessions = getMockedAverageSessions(id)
    const performance = getMockedPerformance(id)

    return {main, activity, averageSessions, performance}
}

function Profil() {

    const { id, method } = useParams();
    var user
    if(method === 'mock') {
        user = getAllUserInfos(id)
    }
    else if(method === 'fetch'){
        /* get user by fetch */
    }
    else {
        return (
            <main className='profil'>
                <h1>Les seules methodes acceptées sont "mock" et "fetch"</h1>
            </main>
        )
    }

    if(!user.main) {
        return (
            <main className='profil'>
                <h1>Cette URL ne correspond a aucun utilisateur enregistré</h1>
            </main>
        )
    }    

    return (
        <main className="profil">
            <Navbar />
            <div className='profil__main'>
                <div className='title'>
                    <h1>Bonjour</h1><h2>{user.main.userInfos.firstName}</h2>
                </div>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

                <div className='board'>
                    <div className='board__graphics'>
                        <ActivityGraphic activity={user.activity}/>
                    </div>
                </div>
            </div> 
        </main>
        
        
    )
}
 
export default Profil