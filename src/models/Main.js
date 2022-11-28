import caloriesIcon from "../assets/caloriesIcon.svg"
import proteinIcon from "../assets/proteinIcon.svg"
import glucidIcon from "../assets/glucidIcon.svg"
import lipidIcon from "../assets/lipidIcon.svg"


/**
 * Main class contains user's main data
 * @param {number} id - id of user
 * @param {Object} keyData - data about calories, carbohydrates, lipids and protein
 * @param {Object} userInfo - age, first and last name
 * @param {number} score OR todayScore - daily score of user
 */

export default class Main {

    constructor(data) {
        this.userId = data.id
        this.userInfos = data.userInfos

		if(data.score) this.score = data.score
		else this.score = data.todayScore

        this.keyData = [
			{
				icon: caloriesIcon,
				unit: 'kCal',
				label: 'Calories',
				amount: data.keyData.calorieCount,
			},
			{
				icon: proteinIcon,
				unit: 'g',
				label: 'Proteines',
				amount: data.keyData.proteinCount,
			},
			{
				icon: glucidIcon,
				unit: 'g',
				label: 'Glucides',
				amount: data.keyData.carbohydrateCount,
			},
			{
				icon: lipidIcon,
				unit: 'g',
				label: 'Lipides',
				amount: data.keyData.lipidCount,
			},
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

