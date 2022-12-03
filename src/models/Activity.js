/**
 * Activity class contains user's activity data
 */
export default class Activity {

    /**
	 * @param {Object} data - user's activity data from fetch or mock
	 */
    constructor(data) {
        this.userId = data.userId

        /** format date for chart display */
        this.sessions = data.sessions.map( session => {
            session.formattedDay = session.day.slice(-2)
            if(session.formattedDay.startsWith('0')) {
                session.formattedDay = session.formattedDay.slice(-1)
            }
            return session
        })
    }
}