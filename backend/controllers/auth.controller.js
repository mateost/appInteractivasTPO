import * as userService from '../services/user.service.js'
import jwt from 'jsonwebtoken'

export function login (req, res) {
  const session = { //creamos la sesion para ver si existe
    userName: req.body.userName,
    password: req.body.password
  }
  // llamamos al userService para poder comprobar si el usuario existe
  return userService.login(session)
    .then(function (user) {
      if (user) {
        // crea el TOken, sign() recibe 2 parámetros, 1 el payload que son los datos que quierto enviar, y el 2 es la palabra secreta
        const token = jwt.sign({ id: user._id, name: user.userName }, 'ANIME SECRET')
// en el momento de hacer el login (nos da un etado 200) le enviamos tambien el Token en el cuerpo para que sea mucho màs fàcil tomarlo en el Front (si lo enviamos en el header es màs complicado tomarlo)
        res.status(200).json({ user, token })
      } else {
        res.status(401).json({ msg: 'El usuario o password ingresado es incorrecto' })
      }
    })
}

export function create (req, res) {
  const user = {
    userName: req.body.userName,
    password: req.body.password
  }
  return userService.create(user)
    .then(function (user) {
      res.status(201).json(user)
    })
}
export function recuperarPass(req, res) { //funcion recuperar pass
    const user = {
        userName: req.body.userName,
      }
      // llamamos al userService para poder comprobar si el usuario existe
      return userService.verificarExistencia(req.body.userName)
      .then (function (user) {
        res.status(201).json(user)
      })
    }

