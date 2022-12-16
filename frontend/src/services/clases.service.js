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
    return fetch(   
        //  Fetch - Le ponemos un 2 parametro donde le enviamos dentro del header el token al backend
          'http://localhost:2032/api/clases',
          {
              method: 'POST',
              headers:{
                  'Content-Type': 'application/json',
                  'auth-token': localStorage.getItem('token')
              },
              body: JSON.stringify(clase)
          })
      .then(response => response.json())
      .then(clase => {
          return clase
      })
    }


