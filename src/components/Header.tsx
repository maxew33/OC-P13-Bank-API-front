import { NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { userHadToken, userIsLogged } from '../reducers/loggedReducer'

import argentBankLogo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowRightFromBracket,
    faArrowRightToBracket,
    faCircleUser,
} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const logged = useSelector((state: RootState) => state.logged.isLogged)
    const hadToken = useSelector((state: RootState) => state.logged.hadToken)
    const userName = useSelector((state: RootState) => state.userProfile)

    const dispatch = useDispatch()

    // sign out actions
    const handleClick = () => {
        logged && dispatch(userIsLogged())
        hadToken && dispatch(userHadToken())
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

                {/* sign in / sign out links */}
                {logged ? (
                    <>
                        <span className="main-nav-icon">
                            <FontAwesomeIcon icon={faCircleUser} />
                        </span>

                        {userName.data?.firstName}

                        <NavLink
                            className="main-nav-item"
                            to="/"
                            onClick={handleClick}
                        >
                            <span className="main-nav-icon">
                                <FontAwesomeIcon
                                    icon={faArrowRightFromBracket}
                                />
                            </span>
                            sign out
                        </NavLink>
                    </>
                ) : (
                    <NavLink
                        className="main-nav-item"
                        to="/login"
                    >
                        <span className="main-nav-icon">
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                        </span>
                        sign in
                    </NavLink>
                )}
            </div>
        </nav>
    )
}
