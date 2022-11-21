import { USER_ACTIVITY } from './data.js'
import Activity from '../models/Activity.js'

function getMockedActivity(id) {
    return new Activity(USER_ACTIVITY.find(activity => id === activity.userId))
}

export default getMockedActivity
