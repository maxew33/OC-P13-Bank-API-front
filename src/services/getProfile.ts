import { profileError } from '../reducers/errorReducer'
import { userIsLogged } from '../reducers/loggedReducer'
import { getUserProfileInfos } from '../reducers/userProfileReducer'
import store from '../utils/store'

export default async function getProfile() {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    }

    return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
    
        .then((res) => res.json())
        .then((response) => {
            
            // get user infos
            store.dispatch(getUserProfileInfos(response.body))
            // the user is looged
            store.dispatch(userIsLogged())
            // set no token error
            store.getState().error.tokenError && store.dispatch(profileError())
        })
        .catch(() => {
            console.error('Error in get profile')

            // set profile error
            !store.getState().error.tokenError && store.dispatch(profileError())
        })
}
