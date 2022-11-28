import ActivityChart from '../components/ActivityChart/ActivityChart.jsx'
import Activity from '../models/Activity.js'

function getFetchedActivity(id, setActivity) {
    fetch(`http://localhost:3000/user/${id}/activity`)
        .then( response => response.json() )
        .then(data => setActivity(<ActivityChart data={new Activity(data.data)}/>))
        .catch(error => console.error)
}

export default getFetchedActivity