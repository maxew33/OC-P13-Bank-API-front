export default async function getProfile (token:string) {
    console.log("getProfile", token)
    const requestOptions = 
    {
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    return fetch("http://localhost:3001/api/v1/user/profile", requestOptions)
        .then((res) => res.json())
        .then((response) => {
            console.log(response.body)
            //compléter le stroe avec les infos récupérées
        })
        .catch(() => {
            console.error('Error in get profile')
            //renvoyer un statut d'erreur dans le store
        })
}