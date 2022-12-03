import '../../css/activityChart.css'
import black_dot from '../../assets/black_dot.svg'
import red_dot from '../../assets/red_dot.svg'
import PropTypes from 'prop-types'
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts'

// eslint-disable-next-line no-unused-vars
import Activity from '../../models/Activity'

/**
 *
 * @param {Activity} data - data from fetch or mock
 * @returns The activity chart from datas in param
 */
export default function ActivityChart({ data }) {
    const black = '#282D30'
    const red = '#E60000'
    const grey = '#9B9EAC'
    const lightGrey = '#DEDEDE'

    const dots = [black_dot, red_dot]

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="activity-tooltip">
                    <p className="label">{`${payload[0].value} ${payload[0].unit}`}</p>
                    <p className="label">{`${payload[1].value} ${payload[1].unit}`}</p>
                </div>
            )
        }

        return null
    }

    const CustomLegend = (props) => {
        const { payload } = props

        return (
            <div className="activity-legend">
                {payload.map((entry, index) => (
                    <div
                        key={`legend-${index}`}
                        className="activity-legend__item"
                    >
                        <img key={`dot-${index}`} src={dots[index]} alt="dot" />
                        <p key={`item-${index}`}>{entry.value}</p>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="activity-chart">
            <p className="activity-chart__title">Activité quotidienne</p>
            <ResponsiveContainer width="100%" aspect={4}>
                <BarChart data={data.sessions} barCategoryGap="35%" barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="formattedDay"
                        tickLine={false}
                        tick={{
                            stroke: grey,
                            strokeWidth: 0,
                            fontSize: 14,
                            fontWeight: 500,
                        }}
                        axisLine={{ stroke: lightGrey }}
                        tickMargin={15}
                    />
                    <YAxis
                        orientation="right"
                        yAxisId="right"
                        dataKey="kilogram"
                        domain={['dataMin-1', 'dataMax+1']}
                        tick={{
                            stroke: grey,
                            strokeWidth: 0,
                            fontSize: 14,
                            fontWeight: 500,
                        }}
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
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={<CustomLegend />} />
                    <Bar
                        yAxisId="right"
                        dataKey="kilogram"
                        fill={black}
                        unit="kg"
                        radius={[3, 3, 0, 0]}
                        barSize={8}
                        name={'Poids (kg)'}
                    />
                    <Bar
                        yAxisId="left"
                        dataKey="calories"
                        fill={red}
                        unit="kCal"
                        radius={[3, 3, 0, 0]}
                        barSize={8}
                        name={'Calories brulées (kCal)'}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

ActivityChart.propTypes = {
    data: PropTypes.object,
}
