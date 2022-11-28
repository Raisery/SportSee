import '../../css/performanceChart.css'
import {
    PolarGrid,
    RadarChart,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from 'recharts'

export default function PerformanceChart({ data }) {
    return (
        <div className="performance-chart">
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
                    fill="#FF0101"
                    fillOpacity={0.78}
                />
            </RadarChart>
        </div>
    )
}
