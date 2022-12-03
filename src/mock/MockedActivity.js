import { USER_ACTIVITY } from './data.js'
import Activity from '../models/Activity.js'

/**
 * 
 * @param {number} id 
 * @returns {Activity | null} Return an Activity object if the user is in the database if not return null
 */
export default function getMockedActivity(id) {
    const data = USER_ACTIVITY.find(activity => parseInt(id) === activity.userId)
    if(data) return new Activity(data)
    else return null
}
