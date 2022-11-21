/**
 * model for Average Sessions
 */

export default class AverageSessions {

    constructor(data) {
        this.userId = data.userId
        this.sessions = data.sessions
    }

    getSessionsNumber() {
        return this.sessions.lenght
    }
}