import { USER_ACTIVITY } from './data.js'
import Activity from '../models/Activity.js'

function getMockedActivity(id) {
    const data = USER_ACTIVITY.find(activity => parseInt(id) === activity.userId)
    if(data) return new Activity(data)
    else return null
}

export default getMockedActivity
