/**
 * model for Performance
 */
const KIND = [ 
    "cardio",
    "energy",
    "endurance",
    "strength",
    "speed",
    "intensity"
]

export default class Performance {

    constructor(data) {
        this.userId = data.userId
        this.data = data.data.map( notMappedData => {
            notMappedData.kind = KIND[notMappedData.kind-1]
            return notMappedData
        })
    }

    getDataNumber() {
        return this.data.lenght
    }
}