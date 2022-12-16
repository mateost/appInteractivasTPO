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

export async function findOne(id){
    return fetch('http://localhost:2032/api/clases/' + id ,{
        headers:{
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())
    .then(list => {
            return list
    })
}


export async function FindOneProfesor(idProfesor){
    return fetch('http://localhost:2032/api/clases/profesor/' + idProfesor ,{
        headers:{
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())
    .then(list => {
        console.log(list)
            return list
    })
}

export async function create(clase){
    console.log(clase)
}