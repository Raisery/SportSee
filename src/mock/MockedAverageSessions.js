import { USER_AVERAGE_SESSIONS } from './data.js'
import AverageSessions from '../models/AverageSessions.js'

function getMockedAverageSessions(id) {
    const data = USER_AVERAGE_SESSIONS.find(averageSessions => parseInt(id) === averageSessions.userId)
    if(data) return new AverageSessions(data)
    else return null
}

export default getMockedAverageSessions
