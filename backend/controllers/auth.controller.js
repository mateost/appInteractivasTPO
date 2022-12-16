import * as userService from "../services/user.service.js";
import jwt from "jsonwebtoken";

export function login(req, res) {
  const session = {
    //creamos la sesion para ver si existe
    email: req.body.userName,
    pass: req.body.password,
  };
  console.log(session);
  // llamamos al userService para poder comprobar si el usuario existe
  return userService.login(session).then(function (user) {
    if (user) {
      // crea el TOken, sign() recibe 2 parámetros, 1 el payload que son los datos que quierto enviar, y el 2 es la palabra secreta
      const token = jwt.sign(
        { id: user._id, name: user.email },
        "TARKET SECRET TOKEN"
      );
      // en el momento de hacer el login (nos da un etado 200) le enviamos tambien el Token en el cuerpo para que sea mucho màs fàcil tomarlo en el Front (si lo enviamos en el header es màs complicado tomarlo)
      res.status(200).json({ user, token });
    } else {
      res
        .status(401)
        .json({ msg: "El usuario o pass ingresado es incorrecto" });
    }
  });
}

export function create(req, res) {
  const user = req.body;

  console.log(req.body);
  return userService.create(user).then(function (user) {
    const token = jwt.sign(
      { id: user._id, name: user.userName },
      "TARKET SECRET TOKEN"
    );
    res.status(201).json({ user, token });
  });
}
export async function preguntaSecreta(req, res) {
  const email = req.headers.email;
  console.log(email);
  // llamamos al userService para poder comprobar si el usuario existe
  const existe = await userService.verificarExistencia(email);
  if (!existe) {
    console.log("no existe");
    return res.status(404).json({ msg: "No encontre el email." });
  }
  const preguntaSecreta = await userService.preguntaSecreta(email);
  res.status(201).json({ preguntaSecreta: preguntaSecreta });
}

export async function resetearPass(req, res) {
  //funcion resetear pass
  const email = req.body.email;
  const newPassword = req.body.newPassword;
  const respuestaSecreta = req.body.respuestaSecreta;
  // llamamos al userService para poder comprobar si el usuario existe
  const existe = await userService.verificarExistencia(email);
  if (!existe) {
    console.log("no existe");
    return res.status(404).json({ msg: "No encontre el email." });
  }
  await userService.resetearPass(email, newPassword, respuestaSecreta);

  res.status(200).json({ preguntaSecreta: preguntaSecreta });
}
