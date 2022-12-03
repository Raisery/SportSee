import { USER_MAIN_DATA } from './data.js'
import Main from '../models/Main.js'


/**
 * 
 * @param {number} id 
 * @returns {Main | null} Return an Main object if the user is in the database if not return null
 */
export default function getMockedMain(id) {
    const data = USER_MAIN_DATA.find(user => parseInt(id) === user.id)
    if(data) return new Main(data)
    else return null  
}
