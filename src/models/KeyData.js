/**
 * KeyData class contains user's keydata
 */
export default class KeyData {

    /**
     * 
     * @param {string} icon - Path of svg icon file
     * @param {string} unit - Unit of the amount value
     * @param {string} label - Name of the keydata
     * @param {number} amount - value of the keydata
     */
    constructor(icon, unit, label, amount) {
        
        this.icon = icon
        this.unit = unit
        this.label = label
        this.amount = amount
    }
}
