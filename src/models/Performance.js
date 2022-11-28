/**
 * model for Performance
 */
const KIND = [ 
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
    "Intensité"
]

export default class Performance {

    constructor(data) {
        this.userId = data.userId
        this.data = data.data.map( mappedData => {
            mappedData.category = KIND[mappedData.kind-1]
            return mappedData
        })
    }

    getDataNumber() {
        return this.data.lenght
    }
}