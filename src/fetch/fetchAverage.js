import AverageChart from '../components/AverageChart/AverageChart.jsx'
import AverageSessions from '../models/AverageSessions.js'

function getFetchedAverage(id, setAverage) {
    fetch(`http://localhost:3000/user/${id}/average-sessions`)
        .then( response => response.json() )
        .then(data => setAverage(<AverageChart data={new AverageSessions(data.data)}/>))
        .catch(error => console.error)
}

export default getFetchedAverage