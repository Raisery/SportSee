import { useLocation, Navigate} from "react-router-dom"

function NotFound() {

    let location = useLocation();
    
    if(location.pathname === "/") return  <Navigate to="/Home" />
    if(location.pathname !== "/NotFound") return <Navigate to="/NotFound" />

    return (
        <main>
            <div className="not-found">
                <h1>Not found 404</h1>
            </div>
        </main>
        
    )
}
 
export default NotFound