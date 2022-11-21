/**
 * model for activity
 */

export default class Activity {

    constructor(data) {
        this.userId = data.userId
        this.sessions = data.sessions
    }

    getSessionsNumber() {
        return this.sessions.lenght
    }
}