import Activity from '../models/Activity.js'

async function getFetchedActivity(id) {
    const reponse = await fetch(`http://localhost:3000/user/${id}/activity`)
    const data = await reponse.json()
    const activity = new Activity(data)
    return activity
}

export default getFetchedActivity