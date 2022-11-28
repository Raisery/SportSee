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
    


function getFetchedMain(id, setMain, setCards) {
    fetch(`http://localhost:3000/user/${id}`)
        .then( response => response.json() )
        .then(data => generate(setMain, setCards, new Main(data.data)))
        .catch(error => console.error)
}

export default getFetchedMain

