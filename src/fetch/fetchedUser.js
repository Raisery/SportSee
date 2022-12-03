import Main from "../models/Main"

/**
 * 
 * @param {number} id - The id of the user
 * @callback setUser - The useState callback to send the result
 * @callback setIsError - The useState callback to send the error
 */
function getFetchedUser(id, setUser, setIsError) {
    fetch(`http://localhost:3000/user/${id}`)
        .then( response => response.json() )
        .then(data => setUser(new Main(data.data).userInfos.firstName))
        .catch(error => setIsError(true))
}

export default getFetchedUser