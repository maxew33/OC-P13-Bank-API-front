import { tokenError } from '../reducers/errorReducer'
import { userHadToken } from '../reducers/loggedReducer'
import store from "../utils/store"

export default async function getToken(email: string, password: string) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    }

    return fetch('http://localhost:3001/api/v1/user/login', requestOptions)
        .then((res) => res.json())
        .then((response) => {
            const { token } = response.body
            localStorage.setItem("token", token)
            
            // the user had token
            store.dispatch(userHadToken())

            // set no token error 
            store.getState().error.tokenError && store.dispatch(tokenError())  
        })
        .catch(() => {
            console.error('Error in API Token')

            //  set token error
            !store.getState().error.tokenError && store.dispatch(tokenError())                
        })
}
