import Main from "../models/Main"

function getFetchedUser(id, setUser) {
    fetch(`http://localhost:3000/user/${id}`)
        .then( response => response.json() )
        .then(data => setUser(new Main(data.data).userInfos.firstName))
        .catch(error => console.error)
}

export default getFetchedUser