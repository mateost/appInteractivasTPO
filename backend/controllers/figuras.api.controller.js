import * as FiguraModel from '../services/figuras.db.service.js'

// me trae de la DB todo el listado completo de elementos
// llama a la función find() de services (services:FiguraModel)
export function find (req, res) {
  FiguraModel.find()
    .then(function (figuras) {
      res.status(200).json(figuras)
    })
}

// me trae de la DB un solo elemento por su "id"
// llama a la función findOne() de services (services:FiguraModel)
export function findOne (req, res) {
  const id = req.params.idFigura
  FiguraModel.findOne(id)
    .then(function (figura) {
      if (figura) {
        res.status(200).json(figura)
      } else {
        res.status(404).json({ message: `La figura #${id} no se encuentra en el sistema.` }) // ok
      }
    })
}

// guarda un nuevo elemento en le DB
// llama a la función create() de services (services:FiguraModel)
export function create (req, res) {
  const figura = req.body
  console.log(req.body)
  FiguraModel.create(figura)
    .then(function (figura) {
      res.status(201).json(figura)
    })
}
// edita los datos del elemento del cual le paso el "id" (edita los campos que le mando en el body, si el campo ya existe: reemplaza la info por a nueva; si el campo no existe: lo crea con la nueva info que le mando EL resto de los datos quedan tal cual stan originalmente)
// llama a la función updateFigura() de services (services:FiguraModel)
export function editOne (req, res) {
  const id = req.params.idFigura
  const figuraData = req.body
  //console.log(id, figuraData);

  FiguraModel.updateFigura(id, figuraData)
    .then(function (figura) {
      if (figura) {
        res.status(200).json(figura)
      } else {
        res.status(404).json({ message: `La figura no se encuentra en el sistema.` }) // ok
      }
    })
}

// reemplaza los datos del elemento del cual le paso el "id" (reeplaza todos los atos existentes por los nuevos (borra loq ue están y soo deja los nuevos que le mando por body, ya sea que existan los campos o que sean nuevos)
// llama a la función changeOne() de services (services:FiguraModel)
export function changeOne (req, res) {
  const id = req.params.idFigura
  const figuraData = req.body
  console.log(figuraData)
  console.log(id)


  FiguraModel.changeOne(id, figuraData)
    .then(function (figura) {
      if (figura) {
        res.status(200).json(figura)
      } else {
        res.status(404).json({ message: `La figura no se encuentra en el sistema.` }) // ok
      }
    })
}

// elimina el elemento del cual le paso el "id"
// llama a la función removeOne() de services (services:FiguraModel)
export function removeOne (req, res) {
  const id = req.params.idFigura

  FiguraModel.removeOne(id)
  .then(function (figuras) {
    res.status(200).json(figuras) // renderiza en formato json
  })
}

