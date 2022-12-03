import { USER_PERFORMANCE } from './data.js'
import Performance from '../models/Performance.js'


/**
 * 
 * @param {number} id 
 * @returns {Performance | null} Return an Performance object if the user is in the database if not return null
 */
export default function getMockedPerformance(id) {
    const data = USER_PERFORMANCE.find(performance => parseInt(id) === performance.userId)
    if(data) return new Performance(data)
    else return null
}


