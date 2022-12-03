import ScoreChart from "../components/ScoreChart/ScoreChart"
import StatCard from "../components/StatCard/StatCard"
import Main from "../models/Main"

function generate(setMain, setCards, data) {
    const cards = data.keyData.map((stat) => {
        return <StatCard key={stat.label} data = {stat} />
    })
    setMain(<ScoreChart data={data}/>)                      
    setCards(cards)
}
    

/**
 * 
 * @param {number} id - The id of the user
 * @callback setMain - The useState callback to send the result of ScoreChart
 * @callback setCards - the useState callback to send the result of StatCards
 * @callback setIsError - The useState callback to send the error
 */
function getFetchedMain(id, setMain, setCards, setIsError) {
    fetch(`http://localhost:3000/user/${id}`)
        .then( response => response.json() )
        .then(data => generate(setMain, setCards, new Main(data.data)))
        .catch(error => setIsError(true))
}

export default getFetchedMain

