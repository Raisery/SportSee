/** 
 * @constant {Array.<string>}
*/
const KIND = [ 
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
    "Intensité"
]

/**
 * Performance class contains user's performances data
 */
export default class Performance {

    /**
	 * @param {Object} data - user's performance data from fetch or mock
	 */
    constructor(data) {
        this.userId = data.userId
        this.data = data.data.map( mappedData => {
            mappedData.category = KIND[mappedData.kind-1]
            return mappedData
        })
    }
}