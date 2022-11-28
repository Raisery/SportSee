import { useState, useEffect } from 'react'
import '../../css/profil.css'
import Navbar from '../../components/Navbar/Navbar'
import getMockedActivity from '../../mock/MockedActivity'
import getMockedMain from '../../mock/MockedMain'
import getMockedAverageSessions from '../../mock/MockedAverageSessions'
import getMockedPerformance from '../../mock/MockedPerformance'
import {
    BarChart,
    LineChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PolarGrid,
    RadarChart,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    PieChart,
    Pie,
    Cell,
} from 'recharts'
import { useParams } from 'react-router-dom'
import getFetchedActivity from '../../fetch/fetchActivity'

function ActivityGraphic({ activity }) {
    return (
        <div className="activity_graphic">
            <p className="activity_graphic__title">Activité quotidienne</p>
            <BarChart
                width={835}
                height={320}
                data={activity.sessions}
                barCategoryGap="35%"
                barGap={8}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                    dataKey="formattedDay"
                    tickLine={false}
                    axisLine={{ stroke: '#DEDEDE' }}
                    tickMargin={15}
                />
                <YAxis
                    orientation="right"
                    yAxisId="right"
                    dataKey="kilogram"
                    domain={['dataMin-1', 'dataMax+1']}
                    allowDecimals={false}
                    axisLine={false}
                    tickLine={false}
                    tickCount={10}
                    allowDataOverflow={true}
                />
                <YAxis
                    yAxisId="left"
                    dataKey="calories"
                    domain={[(dataMin) => dataMin - dataMin, 'dataMax+50']}
                    hide={true}
                />
                <Tooltip />
                <Legend
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    iconSize="8"
                    wrapperStyle={{ top: '-20px' }}
                />
                <Bar
                    yAxisId="right"
                    dataKey="kilogram"
                    fill="#282D30"
                    unit="kg"
                    radius={[3, 3, 0, 0]}
                    barSize={8}
                    name={'Poids (kg)'}
                />
                <Bar
                    yAxisId="left"
                    dataKey="calories"
                    fill="#E60000"
                    unit="kCal"
                    radius={[3, 3, 0, 0]}
                    barSize={8}
                    name={'Calories brulées (kCal)'}
                />
            </BarChart>
        </div>
    )
}

function AverageGraphic({ data }) {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].value} min`}</p>
                </div>
            )
        }

        return null
    }
    return (
        <div className="average_graphic square_graphic">
            <LineChart
                width={258}
                height={263}
                data={data.sessions}
                style={{ background: '#FF0000' }}
                margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis
                    dataKey="weekDay"
                    axisLine={false}
                    tickLine={false}
                    stroke="#FFFFFF"
                    style={{ fontSize: 12 }}
                    textAnchor="middle"
                    orientation="bottom"
                />
                <YAxis
                    dataKey="sessionLength"
                    hide={true}
                    domain={['dataMin-20', 'dataMax+30']}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                    type="monotone"
                    dot={false}
                    dataKey="sessionLength"
                    strokeWidth={2}
                    color="#FFFFFF"
                    stroke="#FFFFFF"
                />
            </LineChart>
            <p className="average_graphic__label">Durée moyenne des sessions</p>
        </div>
    )
}

function RadarGraphic({ data }) {
    return (
        <div className="radar_graphic square_graphic">
            <RadarChart
                outerRadius={90}
                width={258}
                height={263}
                data={data.data}
                startAngle={-150}
                endAngle={210}
                style={{ background: '#282D30' }}
            >
                <PolarGrid
                    radialLines={false}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                />
                <PolarAngleAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey="category"
                    tick={{
                        strokeWidth: 0,
                        fill: '#FFFFFF',
                        fontSize: 12,
                    }}
                />
                <PolarRadiusAxis
                    axisLine={false}
                    tickLine={false}
                    tick={false}
                    domain={[0, 'dataMax']}
                />
                <Radar
                    legendType="none"
                    dataKey="value"
                    stroke="none"
                    fill="#FF0101B2"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </div>
    )
}

/**
 * KPI (key performance indicator)
 */
function KPIGraphic({ data }) {
    const rest = 1 - data.score
    data.stats = [
        { type: 'done', value: data.score },
        { type: 'todo', value: rest },
    ]

    const backgroundColor = '##FF08'
    const COLORS = ['#FF0000', backgroundColor]
    return (
        <div className="KPI square_graphic">
            <PieChart width={258} height={263} top={0}>
                <Pie
                    data={data.stats}
                    cx={'50%'}
                    cy={'50%'}
                    innerRadius={80}
                    outerRadius={90}
                    startAngle={90}
                    endAngle={450}
                    fill={backgroundColor}
                    cornerRadius={5}
                    paddingAngle={0}
                    dataKey="value"
                >
                    {data.stats.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={
                                index === 0
                                    ? COLORS[index % COLORS.length]
                                    : 'none'
                            }
                        />
                    ))}
                </Pie>
            </PieChart>
            {/* <PieChart width={258} height={263}>
                <Pie
                    data={data.stats}
                    nameKey="type"
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={75}
                    fill="#FF0000"
                />
            </PieChart> */}
        </div>
    )
}

function getAllUserInfos(id) {
    const main = getMockedMain(id)
    //const activity = getFetchedActivity(id)
    const averageSessions = getMockedAverageSessions(id)
    const performance = getMockedPerformance(id)

    return { main, averageSessions, performance }
}

function Profil() {
    const { id } = useParams()

    const [userActivity, setUserActivity] = useState()

    useEffect(() => {
        console.log('useeffect')
        const fetchData = async () => {
            const dataActivity = await getFetchedActivity(id)
            console.log('useEffect')
            setUserActivity(dataActivity)
        }
        fetchData().catch(console.error)
    }, [])

    const activityList = userActivity
    console.log(activityList)
    return (
        <main className="profil">
            <Navbar />
            <div className="profil__main">
                <div className="title">
                    <h1>Bonjour</h1>
                    {/* <h2>{user.main.userInfos.firstName}</h2> */}
                </div>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

                <div className="board">
                    <div className="board__graphics">
                        <ActivityGraphic activity={activityList} />
                    </div>
                </div>
                {/* <div className="square_board">
                    <AverageGraphic data={user.averageSessions} />
                    <RadarGraphic data={user.performance} />
                    <KPIGraphic data={user.main} />
                </div> */}
            </div>
        </main>
    )
}

export default Profil
