import { USER_MAIN_DATA } from './data.js'
import User from '../models/User.js'

function getMockedUser(id) {
    return new User(USER_MAIN_DATA.find(user => id === user.id))
}

export default getMockedUser
