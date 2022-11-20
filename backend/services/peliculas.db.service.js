import { ObjectId, MongoClient } from 'mongodb'

const cliente = new MongoClient('mongodb://127.0.0.1:27017')


// me trae de la DB todo el listado completo de elementos
export async function find () {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      const peliculas = await db.collection('Peliculas').find().toArray()
      return peliculas
    })
}

// me trae de la DB un solo elemento por su "id"
export async function findOne (id) {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      const pelicula = await db.collection('Peliculas').findOne({ _id: ObjectId(id) })
      return pelicula
    })
}

// guarda un nuevo elemento en le DB
export async function create (pelicula) {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      await db.collection('Peliculas').insertOne(pelicula)
      return pelicula
    })
}

// edita los datos del elemento del cual le paso el "id" (edita los campos que le mando en el body, si el campo ya existe: reemplaza la info por a nueva; si el campo no existe: lo crea con la nueva info que le mando EL resto de los datos quedan tal cual stan originalmente)
export async function updatePelicula (id, pelicula) {
  console.log(id);
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      await db.collection('Peliculas').updateOne({ _id: new ObjectId(id) }, { $set: pelicula })
      return pelicula
    })

}

// reemplaza los datos del elemento del cual le paso el "id" (reeplaza todos los atos existentes por los nuevos (borra loq ue están y soo deja los nuevos que le mando por body, ya sea que existan los campos o que sean nuevos)
export async function changeOne (id, pelicula) {
  console.log(pelicula);
  console.log(ObjectId(id));
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      await db.collection('Peliculas').updateOne({_id: new ObjectId(id)}, {$set:pelicula})
      //cliente.close()
      return pelicula
    })
}

// elimina el elemento del cual le paso el "id"
export async function removeOne (id) {
  console.log(id);
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('Anime')
      const pelicula = await db.collection('Peliculas').deleteOne({ _id: ObjectId(id) });
      return pelicula
    })
}