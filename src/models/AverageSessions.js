/** 
 * Days list
 * @constant {Array.<string>}
*/
const days = ["L", "M", "M", "J", "V", "S", "D"]

/**
 * AverageSessions class contains user's average sessions data
 */
export default class AverageSessions {

    /**
	 * @param {Object} data - user's average sessions data from fetch or mock
	 */
    constructor(data) {
        this.userId = data.userId
        this.sessions = data.sessions.map( session => {
            session.weekDay = days[session.day-1]
            return session
        })
    }
}