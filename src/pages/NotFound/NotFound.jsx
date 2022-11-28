import '../../css/notFound.css'
import { useLocation, Navigate } from 'react-router-dom'

function NotFound() {
    let location = useLocation()

    if (location.pathname === '/') return <Navigate to="/Home" />
    if (location.pathname !== '/NotFound') return <Navigate to="/NotFound" />

    return (
        <main className="not-found">
            <div className="not-found__message">
                <h1>La page que vous demandez n'existe pas</h1>
            </div>
        </main>
    )
}

export default NotFound
