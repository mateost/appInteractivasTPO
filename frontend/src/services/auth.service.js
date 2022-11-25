
export async function login(userName, password){
    console.log(JSON.stringify({userName, password}));
    return fetch(
        'http://localhost:2032/api/login',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName, password})
        })
        .then((response) => {
            console.log(JSON.stringify(response))
            console.log("respuesta")
            const respuesta = response.json()
            if (response.ok) {
                return respuesta;
            }
            throw new Error(response.status)
        })
}
export async function checkExistUser(userName){
    return fetch(
        'http://localhost:2032/api/existUser',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName})
        })
        .then((response) => {
            console.log(JSON.stringify(response))
            console.log("respuesta")
            const respuesta = response.json()
            if (response.ok) {
                return respuesta;
            }
            throw new Error(response.status)
        })
}