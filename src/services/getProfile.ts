import { userIsLogged } from '../reducers/loggedReducer'
import { getUserProfileInfos } from '../reducers/profileReducer'
import store from '../utils/store'

export default async function getProfile() {
    console.log('getProfile', localStorage.getItem('token'))
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
            console.log(response.body)
            // get user infos
            store.dispatch(getUserProfileInfos(response.body))

            // the user is looged
            store.dispatch(userIsLogged())

        })
        .catch(() => {
            console.error('Error in get profile')
            //renvoyer un statut d'erreur dans le store
        })
}
