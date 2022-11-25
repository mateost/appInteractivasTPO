import * as userService from '../services/user.service.js'
import jwt from 'jsonwebtoken'

export function login (req, res) {
  const session = { //creamos la sesion para ver si existe
    email: req.body.userName,
    pass: req.body.password
  }
  // llamamos al userService para poder comprobar si el usuario existe
  return userService.login(session)
    .then(function (user) {
      if (user) {
        // crea el TOken, sign() recibe 2 parámetros, 1 el payload que son los datos que quierto enviar, y el 2 es la palabra secreta
        const token = jwt.sign({ id: user._id, name: user.email }, 'TARKET SECRET TOKEN')
// en el momento de hacer el login (nos da un etado 200) le enviamos tambien el Token en el cuerpo para que sea mucho màs fàcil tomarlo en el Front (si lo enviamos en el header es màs complicado tomarlo)
        res.status(200).json({ user, token })
      } else {
        res.status(401).json({ msg: 'El usuario o pass ingresado es incorrecto' })
      }
    })
}

export function create (req, res) {
  const user = {
    email: req.body.email,
    pass: req.body.password,
    name: req.body.nombre,
    tipo: req.body.tipo
  }
  return userService.create(user)
    .then(function (user) {
      const token = jwt.sign({ id: user._id, name: user.email }, 'TARKET SECRET TOKEN')
      res.status(201).json({ user, token })
    })
}
export function recuperarPass(req, res) { //funcion recuperar pass
    const user = {
        email: req.body.email,
      }
      // llamamos al userService para poder comprobar si el usuario existe
      return userService.verificarExistencia(req.body.email)
      .then (function (user) {
        res.status(201).json(user)
      })
    }

