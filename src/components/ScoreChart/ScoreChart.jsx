import '../../css/scoreChart.css'
import { PieChart, Pie, Cell } from 'recharts'

/**
 * KPI (key performance indicator)
 */
export default function ScoreChart({ data }) {
    const background = '#FBFBFB'
    const red = '#FF0000'
    const white = '#FFFFFF'
    return (
        <div className="score-chart">
            <p className="score-chart__title">Score</p>
            <div className="score-chart__infos">
                <p className="percent">{data.score * 100}%</p>
                <p>de votre objectif</p>
            </div>
            <PieChart
                width={258}
                height={263}
                style={{ background: background }}
            >
                <Pie
                    data={data.percentage}
                    cx={'50%'}
                    cy={'50%'}
                    innerRadius={80}
                    outerRadius={90}
                    startAngle={90}
                    endAngle={450}
                    cornerRadius={5}
                    paddingAngle={0}
                    dataKey="value"
                >
                    {data.percentage.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={index === 0 ? red : 'none'}
                        />
                    ))}
                </Pie>
                <Pie
                    data={[{ value: 1, name: 'background' }]}
                    cx={'50%'}
                    cy={'50%'}
                    innerRadius={0}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                    cornerRadius={5}
                    paddingAngle={0}
                    dataKey="value"
                    stroke={white}
                >
                    {data.percentage.map((entry, index) => (
                        <Cell key={`back-${index}`} fill={white} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}
