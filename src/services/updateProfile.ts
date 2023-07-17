import { profileError } from '../reducers/errorReducer'
import store from '../utils/store'

export default async function updateProfile(
    firstName: string,
    lastName: string
) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
        }),
    }

    return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
        .then((res) => res.json())

        .catch(() => {
            console.error('Error in updating profile')

            // set profile error
            !store.getState().error.tokenError && store.dispatch(profileError())
        })
}
