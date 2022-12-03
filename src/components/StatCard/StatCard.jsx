import '../../css/statCard.css'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
import KeyData from '../../models/KeyData'

/**
 *
 * @param {KeyData} data
 * @returns The stat card from the data in param
 */
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

StatCard.propTypes = {
    data: PropTypes.object,
}
