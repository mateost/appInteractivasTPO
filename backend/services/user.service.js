import { MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'

const cliente = new MongoClient('mongodb://127.0.0.1:27017')


export async function login ({ userName, password }) {
  await cliente.connect()
  const db = cliente.db('Anime')
  const user = await db.collection('Usuarios').findOne({ userName })
  // verificacmos si el usuario existe
  if (user) {
    const validate = await bcrypt.compare(password, user.password) //omo ahora la password està encriptada, cuando se hace el login se utiliza bcrypt.compare() para comparar ambas contraseñas, el 1 parámetro es la contraseña sin hashear y el 2 paràmetro es la contraseña encriptada

    if (validate) {
      user.password = '' // le coloco '' para oculatr el password y que no se visualice le password encriptado. EL password se debe ocultar porque solamente se utiliza para verificar autenticación, por lo cual solamente autenticaciòn deberìa conocer porque sino hasta pueden saber el sistema de encriptado que estamos utilizando
      return user
    }
  }

  return null
}
export async function verificarExistencia(nombre) { //funcion recuperar usuario, paramatro que pide es nombre
  await cliente.connect()
  const db = cliente.db('Anime')
  const resultadodeconsulta = await db.collection('Usuarios').findOne({ userName: nombre })
  if (resultadodeconsulta) {
    return resultadodeconsulta.email
 }else{
   return 'Disculpa, este usuario no existe'
 }
}


export async function create (user) {
  await cliente.connect()
  const db = cliente.db('Anime')
  const userOld = await db.collection('Usuarios').findOne({ userName: user.userName }) // traigo el usuario
//en el if verifico si existe el usuario antes de crearlo
  if (!userOld) {
    const salt = await bcrypt.genSalt(10) // en genSalt() le decimos cuantas veces queremos que salte para hashear el password
    const newUser = { ...user, password: await bcrypt.hash(user.password, salt) } // bcrypt.hash() es para encriptar, el 1 paràmetro es lo que quermos encriptar y el 2 es cuantos saltos quiero que dè para hashearlo

    await db.collection('Usuarios').insertOne(newUser)
    return user
  } else {
    return null
  }
}
