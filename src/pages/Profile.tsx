import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../utils/store'
import UserProfile from '../types/userProfile'
import getProfile from '../services/getProfile'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import updateProfile from '../services/updateProfile'
import {
    updateUserFirstName,
    updateUserLastName,
} from '../reducers/userProfileReducer'

export default function Profile() {
    const userName = useSelector(
        (state: RootState) => state.userProfile
    ) as UserProfile

    interface userUpdateName {
        firstName: string
        lastName: string
    }

    const [userUpdateName, setUserUpdateName] = useState<userUpdateName>({
        firstName: userName.data?.firstName ?? '',
        lastName: userName.data?.lastName ?? '',
    })

    const navigate = useNavigate()

    const profileError = useSelector(
        (state: RootState) => state.error.profileError
    )
    
    const logged = useSelector((state: RootState) => state.logged.isLogged)

    useEffect(() => {
        !logged && getProfile()
    }, [logged])

    useEffect(() => {
        profileError && navigate('/sign-in')
    }, [navigate, profileError])

    const dispatch = useDispatch()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        //updating the store
        dispatch(updateUserFirstName(userUpdateName.firstName))
        dispatch(updateUserLastName(userUpdateName.lastName))

        // updating the db
        updateProfile(userUpdateName.firstName, userUpdateName.lastName)
    }

    useEffect(() => {
        handleCancel()
    },[userName])

    const handleInput = <K extends keyof userUpdateName>(
        e: FormEvent,
        id: K
    ) => {
        const target = e.target as HTMLFormElement
        setUserUpdateName({ ...userUpdateName, [id]: target.value })
    }

    const inputFirstName = useRef<HTMLInputElement>(null)

    const inputLastName = useRef<HTMLInputElement>(null)

    const handleCancel = () => {

        inputFirstName.current && (inputFirstName.current.value = '')
        inputLastName.current && (inputLastName.current.value = '')
        setUserUpdateName({
            firstName: userName.data?.firstName ?? '',
            lastName: userName.data?.lastName ?? '',
        })
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                Welcome Back
                <form onSubmit={handleSubmit} className="edit-name-form">
                    <div className="edit-name-wrapper">
                        <input
                            type="text"
                            name="first name"
                            id="firstName"
                            className="input-field"
                            ref={inputFirstName}
                            placeholder={userName.data?.firstName}
                            onInput={(e) => handleInput(e, 'firstName')}
                        />
                        <input
                            type="text"
                            name="last name"
                            id="lastName"
                            className="input-field"
                            ref={inputLastName}
                            placeholder={userName.data?.lastName}
                            onInput={(e) => handleInput(e, 'lastName')}
                        />
                    </div>
                    <div className="edit-name-wrapper">
                        <button type="submit" className="edit-button">
                            Save
                        </button>
                        <button className="edit-button" onClick={handleCancel}>
                            cancel
                        </button>
                    </div>
                </form>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Checking (x8349)
                    </h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Savings (x6712)
                    </h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Credit Card (x8349)
                    </h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">
                        Current Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
        </main>
    )
}
