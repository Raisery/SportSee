import caloriesIcon from "../assets/caloriesIcon.svg"
import proteinIcon from "../assets/proteinIcon.svg"
import glucidIcon from "../assets/glucidIcon.svg"
import lipidIcon from "../assets/lipidIcon.svg"
import KeyData from "./KeyData"


/**
 * Main class contains user's main data
 */
export default class Main {

	/**
	 * @param {Object} data - user's main data from fetch or mock
	 */
    constructor(data) {
        this.userId = data.id
        this.userInfos = data.userInfos

		if(data.score) this.score = data.score
		else this.score = data.todayScore

		console.log(typeof(caloriesIcon))
        this.keyData = [
			new KeyData(caloriesIcon, 'kCal', 'Calories', data.keyData.calorieCount),
			new KeyData(proteinIcon, 'g', 'Proteines', data.keyData.proteinCount),
			new KeyData(glucidIcon, 'g', 'Glucides', data.keyData.carbohydrateCount),
			new KeyData (lipidIcon, 'g', 'Lipides', data.keyData.lipidCount),
		];

		this.percentage = [
			{
				name: 'done',
				value: this.score*100,
			},
			{ 
				name: 'goal', 
				value: 100 - (this.score*100)
			},
		];
    }
}

