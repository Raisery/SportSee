import { USER_AVERAGE_SESSIONS } from './data.js'
import AverageSessions from '../models/AverageSessions.js'

function getMockedAverageSessions(id) {
    return new AverageSessions(USER_AVERAGE_SESSIONS.find(activity => id === activity.userId))
}

export default getMockedAverageSessions
