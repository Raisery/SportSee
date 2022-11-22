import { USER_MAIN_DATA } from './data.js'
import Main from '../models/Main.js'

function getMockedMain(id) {
    const data = USER_MAIN_DATA.find(user => parseInt(id) === user.id)
    if(data) return new Main(data)
    else return null
    
}

export default getMockedMain
