import { ObjectId, MongoClient } from 'mongodb'

const cliente = new MongoClient('mongodb://127.0.0.1:27017')


// me trae de la DB todo el listado completo de elementos
export async function find () {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      const personajes = await db.collection('Personajes').find().toArray()
      return personajes
    })
}

// me trae de la DB un solo elemento por su "id"
export async function findOne (id) {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      const personaje = await db.collection('Personajes').findOne({ _id: ObjectId(id) })
      return personaje
    })
}

// guarda un nuevo elemento en le DB
export async function create (personaje) {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      await db.collection('Personajes').insertOne(personaje)
      return personaje
    })
}

// edita los datos del elemento del cual le paso el "id" (edita los campos que le mando en el body, si el campo ya existe: reemplaza la info por a nueva; si el campo no existe: lo crea con la nueva info que le mando EL resto de los datos quedan tal cual stan originalmente)
export async function updatePersonaje (id, personaje) {
  console.log(id);
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      await db.collection('Personajes').updateOne({ _id: new ObjectId(id) }, { $set: personaje })
      return personaje
    })

}

// reemplaza los datos del elemento del cual le paso el "id" (reeplaza todos los atos existentes por los nuevos (borra loq ue están y soo deja los nuevos que le mando por body, ya sea que existan los campos o que sean nuevos)
export async function changeOne (id, personaje) {
  console.log(personaje);
  console.log(ObjectId(id));
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      await db.collection('Personajes').updateOne({_id: new ObjectId(id)}, {$set:personaje})
      //cliente.close()
      return personaje
    })
}

// elimina el elemento del cual le paso el "id"
export async function removeOne (id) {
  console.log(id);
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      const personaje = await db.collection('Personajes').deleteOne({ _id: ObjectId(id) });
      return personaje
    })
}