import '../../css/statCard.css'

export default function StatCard({ data }) {
    return (
        <div className="stat-card">
            <img src={data.icon} alt={data.label} />
            <div className="stat-card__infos">
                <p className="stat-card__infos__amount">
                    {data.amount}
                    {data.unit}
                </p>
                <p className="stat-card__infos__label">{data.label}</p>
            </div>
        </div>
    )
}
