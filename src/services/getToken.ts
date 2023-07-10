import getProfile from "./getProfile"

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
            //où mettre le token ?
            getProfile(token)
        })
        .catch(() => {
            console.error('Error in API Token')
            //renvoyer un statut d'erreur dans le store
        })
}
