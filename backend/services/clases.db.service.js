import { ObjectId, MongoClient } from 'mongodb';

const cliente = new MongoClient('mongodb+srv://mateyger:mateyger@cluster0.kufooss.mongodb.net/test')


// me trae de la DB todo el listado completo de elementos
export async function find () {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('trk')
      const clases = await db.collection('clases').find().toArray()
      return clases
    })
}

// me trae de la DB un solo elemento por su "id"
export async function findTipo () {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('trk')
      //const indiv = await db.collection('clases').find({ tipo: "particular" }).toArray()
      //const grupal = await db.collection('clases').find({ tipo: "grupal" }).toArray()

      const indiv = await db.collection('clases').aggregate([
        {
          $lookup: {
            from: "materias",
            localField: "materia",
            foreignField: "nombre",
            as: "img"
          }
        },
        {
          $match:
          { tipo: "particular"}
        },
        {
          $set: {
            img: { $arrayElemAt: ["$img.img", 0] }
          }
        }
      ]).toArray();
      const grupal = await db.collection('clases').aggregate([
        {
          $lookup: {
            from: "materias",
            localField: "materia",
            foreignField: "nombre",
            as: "img"
          }
        },
        {
          $match:
          { tipo: "grupal"}
        },
        {
          $set: {
            img: { $arrayElemAt: ["$img.img", 0] }
          }
        }
      ]).toArray();
      return {Individual: indiv, Grupal: grupal}

    })
}

export async function findMateria(materia){
  return cliente.connect()
  .then(async function(){
    const db = cliente.db('trk')
      const img = await db.collection('materias').findOne(
        { nombre: materia } ,
        { projection: {"img": 1, "_id":0 }}
        )
      return img.img
  }).catch(() => {})
}
export async function findMaterias () {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('trk')
      const materias = await db.collection('materias').find({}, { projection: {"nombre":1 ,"img": 1,  "_id":0 }}).toArray()
      return materias
    })
}


export async function findOne (id) {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('trk')
      const clase = await db.collection('clases').findOne({ _id: ObjectId(id) }) 
      return clase
    })
}

export async function findProfesor (id) {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('trk')
      const clase = await db.collection('clases').aggregate([
        {
          $lookup: {
            from: "materias",
            localField: "materia",
            foreignField: "nombre",
            as: "img"
          }
        },
        {
          $match:
          { profesorId: ObjectId(id) }
        },
        {
          $set: {
            img: { $arrayElemAt: ["$img.img", 0] }
          }
        }
      ]).toArray()
      return clase
    })
}

// guarda un nuevo elemento en le DB
export async function create (clase) {
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('trk')
      await db.collection('clases').insertOne(clase)
      return clase
    })
}

// edita los datos del elemento del cual le paso el "id" (edita los campos que le mando en el body, si el campo ya existe: reemplaza la info por a nueva; si el campo no existe: lo crea con la nueva info que le mando EL resto de los datos quedan tal cual stan originalmente)
export async function updateClase (id, clase) {
  console.log(id);
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('trk')
      await db.collection('clases').updateOne({ _id: new ObjectId(id) }, { $set: clase })
      return clase
    })

}

// reemplaza los datos del elemento del cual le paso el "id" (reeplaza todos los atos existentes por los nuevos (borra loq ue están y soo deja los nuevos que le mando por body, ya sea que existan los campos o que sean nuevos)
export async function changeOne (id, clase) {
  console.log(clase);
  console.log(ObjectId(id));
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('trk')
      await db.collection('clases').updateOne({_id: new ObjectId(id)}, {$set:clase})
      //cliente.close()
      return clase
    })
}

// elimina el elemento del cual le paso el "id"
export async function removeOne (id) {
  console.log(id);
  return cliente.connect()
    .then(async function () {
      const db = cliente.db('trk')
      const clase = await db.collection('clases').deleteOne({ _id: ObjectId(id) });
      return clase
    })
}