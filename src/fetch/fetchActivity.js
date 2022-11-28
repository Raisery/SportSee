import Activity from '../models/Activity.js'

async function getFetchedActivity(id) {
    /* console.log("coucou")
    const reponse = await fetch(`http://localhost:3000/user/${id}/activity`)
    const data = await reponse.json()
    const activity = new Activity(data)
    console.log(activity)
    return activity */
    console.log("fetchActivity")
    let _data = await fetch(`http://localhost:3000/user/${id}/activity`)
        .then( response => response.json() )
        .catch( error => console.log(error.message) )
        return(_data.data)
}

export default getFetchedActivity