import { NavLink } from 'react-router-dom'
import argentBankLogo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to={'/'}>
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink className="main-nav-item" to={'/sign-in'}>
                    <FontAwesomeIcon icon={faCircleUser} />
                    Sign In
                </NavLink>
            </div>
        </nav>
    )
}

export default Header
