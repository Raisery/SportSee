import { USER_PERFORMANCE } from './data.js'
import Performance from '../models/Performance.js'

function getMockedPerformance(id) {
    const data = USER_PERFORMANCE.find(performance => parseInt(id) === performance.userId)
    if(data) return new Performance(data)
    else return null
}

export default getMockedPerformance
