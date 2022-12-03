import { USER_AVERAGE_SESSIONS } from './data.js'
import AverageSessions from '../models/AverageSessions.js'


/**
 * 
 * @param {number} id 
 * @returns {AverageSessions | null} Return an AverageSessions object if the user is in the database if not return null
 */
export default function getMockedAverageSessions(id) {
    const data = USER_AVERAGE_SESSIONS.find(averageSessions => parseInt(id) === averageSessions.userId)
    if(data) return new AverageSessions(data)
    else return null
}