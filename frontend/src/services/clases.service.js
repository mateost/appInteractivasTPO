export async function find(){
    return fetch('http://localhost:2032/api/clases/tipo',{
        headers:{
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())
    .then(list => {
            return list
    })
}

