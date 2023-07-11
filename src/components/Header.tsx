import { NavLink } from 'react-router-dom'
import argentBankLogo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowRightFromBracket,
    faArrowRightToBracket,
    faCircleUser,
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../utils/store'
import { userIsLogged } from '../reducers/loggedReducer'

function Header() {
    const logged = useSelector((state: RootState) => state.logged)
    const userName = useSelector((state: RootState) => state.userProfile)
    const dispatch = useDispatch()

    const handleClick = () => {
        logged && dispatch(userIsLogged())
    }

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to={'/'} onClick={handleClick}>
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {logged && (
                    <>
                        <span className="main-nav-icon">
                            <FontAwesomeIcon icon={faCircleUser} />
                        </span>

                        {userName.data?.firstName}
                    </>
                )}
                <NavLink
                    className="main-nav-item"
                    to={'/sign-in'}
                    onClick={handleClick}
                >
                    {logged ? (
                        <>
                            <span className="main-nav-icon">
                                <FontAwesomeIcon
                                    icon={faArrowRightFromBracket}
                                />
                            </span>
                            sign out
                        </>
                    ) : (
                        <>
                            <span className="main-nav-icon">
                                <FontAwesomeIcon icon={faArrowRightToBracket} />
                            </span>
                            sign in
                        </>
                    )}
                </NavLink>
            </div>
        </nav>
    )
}

export default Header
