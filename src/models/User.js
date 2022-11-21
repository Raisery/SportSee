/**
 * model for User
 */

export default class User {

    constructor(data) {
        this.userId = data.id
        this.userInfos = data.userInfos
        this.score = data.score
        this.keyData = data.keyData
    }
}