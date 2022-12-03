import AverageChart from '../components/AverageChart/AverageChart.jsx'
import AverageSessions from '../models/AverageSessions.js'

/**
 * 
 * @param {number} id - The id of the user
 * @callback setAverage - The useState callback to send the result
 * @callback setIsError - The useState callback to send the error
 */
function getFetchedAverage(id, setAverage, setIsError) {
    fetch(`http://localhost:3000/user/${id}/average-sessions`)
        .then( response => response.json() )
        .then(data => setAverage(<AverageChart data={new AverageSessions(data.data)}/>))
        .catch(err => setIsError(true))
}

export default getFetchedAverage