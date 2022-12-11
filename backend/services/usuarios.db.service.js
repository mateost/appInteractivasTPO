import { ObjectId, MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://mateyger:mateyger@cluster0.kufooss.mongodb.net/test"
);

// me trae de la DB todo el listado completo de elementos
export async function find() {
  return cliente.connect().then(async function () {
    const db = cliente.db("trk");
    const usuarios = await db.collection("usuarios").find().toArray();
    return usuarios;
  });
}

// me trae de la DB un solo elemento por su "id"
export async function findOne(id) {
  return cliente.connect().then(async function () {
    const db = cliente.db("trk");
    const usuario = await db
      .collection("usuarios")
      .findOne({ _id: ObjectId(id) });
    return usuario;
  });
}

// guarda un nuevo elemento en le DB
export async function create(usuario) {
  console.log("esta entrando aca?");
  return cliente.connect().then(async function () {
    const db = cliente.db("trk");
    await db.collection("usuarios").insertOne(usuario);
    return usuario;
  });
}

// edita los datos del elemento del cual le paso el "id" (edita los campos que le mando en el body, si el campo ya existe: reemplaza la info por a nueva; si el campo no existe: lo crea con la nueva info que le mando EL resto de los datos quedan tal cual stan originalmente)
export async function updateUsuario(id, usuario) {
  console.log(id);
  return cliente.connect().then(async function () {
    const db = cliente.db("trk");
    await db
      .collection("usuarios")
      .updateOne({ _id: new ObjectId(id) }, { $set: usuario });
    return usuario;
  });
}

// reemplaza los datos del elemento del cual le paso el "id" (reeplaza todos los atos existentes por los nuevos (borra loq ue están y soo deja los nuevos que le mando por body, ya sea que existan los campos o que sean nuevos)
export async function changeOne(id, usuario) {
  console.log(usuario);
  console.log(ObjectId(id));
  return cliente.connect().then(async function () {
    const db = cliente.db("trk");
    await db
      .collection("usuarios")
      .updateOne({ _id: new ObjectId(id) }, { $set: usuario });
    //cliente.close()
    return usuario;
  });
}

// elimina el elemento del cual le paso el "id"
export async function removeOne(id) {
  console.log(id);
  return cliente.connect().then(async function () {
    const db = cliente.db("trk");
    const usuario = await db
      .collection("usuarios")
      .deleteOne({ _id: ObjectId(id) });
    return usuario;
  });
}
