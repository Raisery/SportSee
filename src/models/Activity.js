/**
 * model for activity
 */

export default class Activity {

    constructor(data) {
        this.userId = data.userId
        this.sessions = data.sessions.map( session => {
            session.formattedDay = session.day.slice(-2)
            if(session.formattedDay.startsWith('0')) {
                session.formattedDay = session.formattedDay.slice(-1)
            }
            return session
        })
    }

    getSessionsNumber() {
        return this.sessions.lenght
    }
}