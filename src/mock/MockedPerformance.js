import { USER_PERFORMANCE } from './data.js'
import Performance from '../models/Performance.js'

function getMockedPerformance(id) {
    return new Performance(USER_PERFORMANCE.find(performance => id === performance.userId))
}

export default getMockedPerformance
