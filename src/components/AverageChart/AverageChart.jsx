import '../../css/averageChart.css'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import { PureComponent } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
import AverageSessions from '../../models/AverageSessions'

class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props
        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={3}
                    y={0}
                    dy={0}
                    textAnchor="end"
                    fill="#FFFFFF"
                    opacity={0.5}
                    fontSize={12}
                >
                    {payload.value}
                </text>
            </g>
        )
    }
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value} min`}</p>
            </div>
        )
    }

    return null
}

/**
 * Component for displaying a chart with AverageSessions object
 *
 * @param {AverageSessions} data - data from fetch or mock
 * @returns The average sessions chart from datas in param
 */
export default function AverageChart({ data }) {
    return (
        <div className="average-chart">
            <LineChart
                width={258}
                height={263}
                data={data.sessions}
                style={{ background: '#FF0000' }}
                margin={{
                    right: 10,
                    left: 10,
                }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
                        <stop
                            offset="10%"
                            stopColor="#FFFFFF"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="80%"
                            stopColor="#FFFFFF"
                            stopOpacity={0.4}
                        />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="weekDay"
                    axisLine={false}
                    tickLine={false}
                    style={{ fontSize: 12 }}
                    tick={<CustomizedAxisTick />}
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
                    stroke="url(#colorUv)"
                />
            </LineChart>
            <p className="average-chart__label">Durée moyenne des sessions</p>
        </div>
    )
}

AverageChart.propTypes = {
    data: PropTypes.object,
}
