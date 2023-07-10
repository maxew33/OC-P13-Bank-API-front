import { FormEvent, useEffect, useRef, useState } from 'react'
import getToken from '../services/getToken'
import { useSelector } from 'react-redux'
import { RootState } from '../utils/store'
import { useNavigate } from 'react-router-dom'
// import getToken from '../services/testGetToken'


function SignIn() {
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

    //En utilisant <K extends keyof dataFormat> comme type générique,
    //on spécifie que K doit être une clé valide de l'interface dataFormat.
    //TypeScript peut garantir que la clé id est correcte lors de l'utilisation de newInputData.

    const handleInput = <K extends keyof dataFormat>(e: FormEvent, id: K) => {
        const target = e.target as HTMLFormElement
        setInputData({ ...inputData, [id]: target.value })
    }

    const checkbox = useRef<HTMLInputElement>(null)

    const handleCheck = () => {
        const rememberMe = checkbox.current?.checked ?? false
        setInputData({ ...inputData, rememberMe: rememberMe })
    }

    const test = useSelector((state: RootState) => state.logged)
    const testUserInfos = useSelector((state: RootState) => state.getProfile)
    console.log(test, testUserInfos)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(inputData)

        test && navigate('/user')
    }, [inputData, navigate, test])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const myToken = getToken(inputData.email, inputData.password)
        console.log(myToken)
    }

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
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onInput={(e) => handleInput(e, 'password')}
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
                    {/* PLACEHOLDER DUE TO STATIC SITE */}
                    <button type="submit" className="sign-in-button">
                        {/* {isLoading ? 'Authenticating...' : 'Sign in'} */}
                        Sign in
                    </button>

                    {/* {isError && <div>Error occurred.</div>} */}
                    {/* SHOULD BE THE BUTTON BELOW */}
                    {/* <button class="sign-in-button">Sign In</button> */}
                    {/*  */}
                </form>
            </section>
        </main>
    )
}

export default SignIn
