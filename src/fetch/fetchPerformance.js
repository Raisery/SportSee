import PerformanceChart from "../components/PerformanceChart/PerformanceChart"
import Performance from "../models/Performance"

function getFetchedPerformance(id, setPerformance, setIsError) {
    fetch(`http://localhost:3000/user/${id}/performance`)
        .then( response => response.json() )
        .then(data => setPerformance(<PerformanceChart data={new Performance(data.data)}/>))
        .catch(error => setIsError(true))
}

export default getFetchedPerformance