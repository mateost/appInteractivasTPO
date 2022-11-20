import * as UsuarioModel from '../services/usuarios.db.service.js'

// me trae de la DB todo el listado completo de elementos
// llama a la función find() de services (services:UsuarioModel)
export function find (req, res) {
  UsuarioModel.find()
    .then(function (usuarios) {
      res.status(200).json(usuarios)
    })
}

// me trae de la DB un solo elemento por su "id"
// llama a la función findOne() de services (services:UsuarioModel)
export function findOne (req, res) {
  const id = req.params.idUsuario
  UsuarioModel.findOne(id)
    .then(function (usuario) {
      if (usuario) {
        res.status(200).json(usuario)
      } else {
        res.status(404).json({ message: `La usuario #${id} no se encuentra en el sistema.` }) // ok
      }
    })
}

// guarda un nuevo elemento en le DB
// llama a la función create() de services (services:UsuarioModel)
export function create (req, res) {
  const usuario = req.body
  console.log(req.body)
  UsuarioModel.create(usuario)
    .then(function (usuario) {
      res.status(201).json(usuario)
    })
}
// edita los datos del elemento del cual le paso el "id" (edita los campos que le mando en el body, si el campo ya existe: reemplaza la info por a nueva; si el campo no existe: lo crea con la nueva info que le mando EL resto de los datos quedan tal cual stan originalmente)
// llama a la función updateUsuario() de services (services:UsuarioModel)
export function editOne (req, res) {
  const id = req.params.idUsuario
  const usuarioData = req.body
  //console.log(id, usuarioData);

  UsuarioModel.updateUsuario(id, usuarioData)
    .then(function (usuario) {
      if (usuario) {
        res.status(200).json(usuario)
      } else {
        res.status(404).json({ message: `La usuario no se encuentra en el sistema.` }) // ok
      }
    })
}

// reemplaza los datos del elemento del cual le paso el "id" (reeplaza todos los atos existentes por los nuevos (borra loq ue están y soo deja los nuevos que le mando por body, ya sea que existan los campos o que sean nuevos)
// llama a la función changeOne() de services (services:UsuarioModel)
export function changeOne (req, res) {
  const id = req.params.idUsuario
  const usuarioData = req.body
  console.log(usuarioData)
  console.log(id)


  UsuarioModel.changeOne(id, usuarioData)
    .then(function (usuario) {
      if (usuario) {
        res.status(200).json(usuario)
      } else {
        res.status(404).json({ message: `La usuario no se encuentra en el sistema.` }) // ok
      }
    })
}

// elimina el elemento del cual le paso el "id"
// llama a la función removeOne() de services (services:UsuarioModel)
export function removeOne (req, res) {
  const id = req.params.idUsuario

  UsuarioModel.removeOne(id)
  .then(function (usuarios) {
    res.status(200).json(usuarios) // renderiza en formato json
  })
}

