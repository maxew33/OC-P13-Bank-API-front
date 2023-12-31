import { FormEvent, useEffect, useRef, useState } from 'react'
import getToken from '../services/getToken'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    interface dataFormat {
        email: string
        password: string
        rememberMe: boolean
    }

    const [inputData, setInputData] = useState<dataFormat>({
        email: '',
        password: '',
        rememberMe: false,
    })

    const handleInput = (e: FormEvent, id: string) => {
        const target = e.target as HTMLFormElement
        setInputData({ ...inputData, [id]: target.value })
    }

    //get the reference of the form fields

    const checkbox = useRef<HTMLInputElement>(null)

    const inputName = useRef<HTMLInputElement>(null)

    const inputPassword = useRef<HTMLInputElement>(null)

    const handleCheck = () => {
        const rememberMe = checkbox.current?.checked ?? false
        setInputData({ ...inputData, rememberMe: rememberMe })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        getToken(inputData.email, inputData.password)

        //empty input fields

        inputName.current && (inputName.current.value = '')
        inputPassword.current && (inputPassword.current.value = '')

        setInputData({
            email: '',
            password: '',
            rememberMe: false,
        })
    }

    const hadToken = useSelector((state: RootState) => state.logged.hadToken)

    const tokenError = useSelector((state: RootState) => state.error.tokenError)

    const profileError = useSelector((state: RootState) => state.error.profileError)

    const navigate = useNavigate()

    useEffect(() => {
        hadToken && navigate('/profile')
    }, [navigate, hadToken])

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon" />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            onInput={(e) => handleInput(e, 'email')}
                            ref={inputName}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onInput={(e) => handleInput(e, 'password')}
                            ref={inputPassword}
                            required
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            onInput={handleCheck}
                            ref={checkbox}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type="submit" className="sign-in-button">
                        Sign in
                    </button>
                </form>
            </section>
            {tokenError && <p className='error'>An error occurs, please refill the fields.</p>}
            {profileError && <p className='error'>We are sorry, your profile is unreachable.</p>}
        </main>
    )
}
