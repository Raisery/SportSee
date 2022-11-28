const days = ["L", "M", "M", "J", "V", "S", "D"]

/**
 * model for Average Sessions
 */

export default class AverageSessions {

    constructor(data) {
        this.userId = data.userId
        this.sessions = data.sessions.map( session => {
            session.weekDay = days[session.day-1]
            return session
        })
    }
}