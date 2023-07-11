import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <div className="main bg-dark error-page">
            <div className="error-msg">Error 404</div>
            <NavLink className="link" to="/">
              back to home page
            </NavLink>
        </div>
    )
}

export default Error
