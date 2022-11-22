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
        this.data = data.data.map( mappedData => {
            mappedData.kind = KIND[mappedData.kind-1]
            return mappedData
        })
    }

    getDataNumber() {
        return this.data.lenght
    }
}