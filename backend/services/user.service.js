import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

const cliente = new MongoClient(
  "mongodb+srv://mateyger:mateyger@cluster0.kufooss.mongodb.net/test"
);

export async function login({ email, pass }) {
  await cliente.connect();
  const db = cliente.db("trk");
  const user = await db.collection("usustarios").findOne({ email });
  // verificacmos si el usuario exie
  if (user) {
    const validate = await bcrypt.compare(pass, user.pass); //omo ahora la pass està encriptada, cuando se hace el login se utiliza bcrypt.compare() para comparar ambas contraseñas, el 1 parámetro es la contraseña sin hashear y el 2 paràmetro es la contraseña encriptada
    console.log(pass);
    if (validate) {
      user.pass = ""; // le coloco '' para oculatr el pass y que no se visualice le pass encriptado. EL pass se debe ocultar porque solamente se utiliza para verificar autenticación, por lo cual solamente autenticaciòn deberìa conocer porque sino hasta pueden saber el sistema de encriptado que estamos utilizando
      return user;
    }
  }

  return null;
}
export async function verificarExistencia(nombre) {
  //funcion recuperar usuario, paramatro que pide es nombre
  await cliente.connect();
  const db = cliente.db("trk");
  const resultadodeconsulta = await db
    .collection("usuarios")
    .findOne({ email: nombre });
  if (resultadodeconsulta) {
    return resultadodeconsulta.email;
  } else {
    return "Disculpa, este usuario no existe";
  }
}

export async function create(user) {
  await cliente.connect();
  const db = cliente.db("trk");
  console.log("imprimo user:::", user);
  const userOld = await db
    .collection("usuarios")
    .findOne({ email: user.userName }); // traigo el usuario
  //en el if verifico si existe el usuario antes de crearlo
  console.log("imprimo userOld:::", userOld);
  if (!userOld) {
    const salt = await bcrypt.genSalt(10); // en genSalt() le decimos cuantas veces queremos que salte para hashear el pass
    const newUser = {
      name: user.nombre,
      email: user.userName,
      pass: await bcrypt.hash(user.password, salt),
      preguntaSecreta: user.preguntaSecreta,
      respuestaSecreta: await bcrypt.hash(user.respuestaSecreta, salt),
      tipo: user.tipo,
    }; // bcrypt.hash() es para encriptar, el 1 paràmetro es lo que quermos encriptar y el 2 es cuantos saltos quiero que dè para hashearlo

    await db
      .collection("usuarios")
      .insertOne(newUser)
      .then((result) => {
        newUser._id = result.insertedId;
      });

    delete newUser["pass"];
    delete newUser["respuestaSecreta"];

    console.log(newUser);

    if (user.tipo === "alumno") {
      const newAlumno = {
        email: user.userName,
        name: user.nombre,
      };
    }
    return newUser;
  } else {
    return null;
  }
}
