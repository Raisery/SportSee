import ActivityChart from '../components/ActivityChart/ActivityChart.jsx'
import Activity from '../models/Activity.js'

/**
 * 
 * @param {number} id - The id of the user
 * @callback setActivity - The useState callback to send the result
 * @callback setIsError - The useState callback to send the error
 */
function getFetchedActivity(id, setActivity, setIsError) {
    fetch(`http://localhost:3000/user/${id}/activity`)
        .catch(err => setIsError(true) )
        .then( response => response.json() )
        .then(data => setActivity(<ActivityChart data={new Activity(data.data)}/>))
        
    
}

export default getFetchedActivity