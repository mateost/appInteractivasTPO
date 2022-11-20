import * as PersonajeModel from '../services/personajes.db.service.js'

// me trae de la DB todo el listado completo de elementos
// llama a la función find() de services (services:PersonajeModel)
export function find (req, res) {
  PersonajeModel.find()
    .then(function (personajes) {
      res.status(200).json(personajes)
    })
}

// me trae de la DB un solo elemento por su "id"
// llama a la función findOne() de services (services:PersonajeModel)
export function findOne (req, res) {
  const id = req.params.idPersonaje
  PersonajeModel.findOne(id)
    .then(function (personaje) {
      if (personaje) {
        res.status(200).json(personaje)
      } else {
        res.status(404).json({ message: `La personaje #${id} no se encuentra en el sistema.` }) // ok
      }
    })
}

// guarda un nuevo elemento en le DB
// llama a la función create() de services (services:PersonajeModel)
export function create (req, res) {
  const personaje = req.body
  console.log(req.body)
  PersonajeModel.create(personaje)
    .then(function (personaje) {
      res.status(201).json(personaje)
    })
}
// edita los datos del elemento del cual le paso el "id" (edita los campos que le mando en el body, si el campo ya existe: reemplaza la info por a nueva; si el campo no existe: lo crea con la nueva info que le mando EL resto de los datos quedan tal cual stan originalmente)
// llama a la función updatePersonaje() de services (services:PersonajeModel)
export function editOne (req, res) {
  const id = req.params.idPersonaje
  const personajeData = req.body
  //console.log(id, personajeData);

  PersonajeModel.updatePersonaje(id, personajeData)
    .then(function (personaje) {
      if (personaje) {
        res.status(200).json(personaje)
      } else {
        res.status(404).json({ message: `La personaje no se encuentra en el sistema.` }) // ok
      }
    })
}

// reemplaza los datos del elemento del cual le paso el "id" (reeplaza todos los atos existentes por los nuevos (borra loq ue están y soo deja los nuevos que le mando por body, ya sea que existan los campos o que sean nuevos)
// llama a la función changeOne() de services (services:PersonajeModel)
export function changeOne (req, res) {
  const id = req.params.idPersonaje
  const personajeData = req.body
  console.log(personajeData)
  console.log(id)


  PersonajeModel.changeOne(id, personajeData)
    .then(function (personaje) {
      if (personaje) {
        res.status(200).json(personaje)
      } else {
        res.status(404).json({ message: `La personaje no se encuentra en el sistema.` }) // ok
      }
    })
}

// elimina el elemento del cual le paso el "id"
// llama a la función removeOne() de services (services:PersonajeModel)
export function removeOne (req, res) {
  const id = req.params.idPersonaje

  PersonajeModel.removeOne(id)
  .then(function (personajes) {
    res.status(200).json(personajes) // renderiza en formato json
  })
}

