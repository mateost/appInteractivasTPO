import * as ClaseModel from '../services/clases.db.service.js'

// me trae de la DB todo el listado completo de elementos
// llama a la función find() de services (services:ClaseModel)
export function find (req, res) {
  ClaseModel.find()
    .then(function (clases) {
      res.status(200).json(clases)
    })
}

export function findTipo (req, res) {
  const tipo = req.params.type
  ClaseModel.findTipo(tipo)
    .then(function (clases) {
      if (clases) {
        res.status(200).json(clases)
      } else {
        res.status(404).json({ message: `La clase #${id} no se encuentra en el sistema.` }) // ok
      }
    })
}


export function findMateria (req, res) {
  const materia = req.params.materia
  ClaseModel.findMateria(materia)
    .then(function (img) {
      if (img) {
        res.status(200).json(img)
      } else {
        res.status(404).json({ message: `La materia ${materia} no tiene una imagen cargada.` }) // ok
      }
    })
}


export function findMaterias (req, res) {
  ClaseModel.findMaterias()
    .then(function (materias) {
      res.status(200).json(materias)
    })
}

// me trae de la DB un solo elemento por su "id"
// llama a la función findOne() de services (services:ClaseModel)

export function findOne (req, res) {
  const id = req.params.idClase
  ClaseModel.findOne(id)
    .then(function (clase) {
      if (clase) {
        res.status(200).json(clase)
      } else {
        res.status(404).json({ message: `La clase #${id} no se encuentra en el sistema.` }) // ok
      }
    })
}

// guarda un nuevo elemento en le DB
// llama a la función create() de services (services:ClaseModel)
export function create (req, res) {
  const clase = req.body
  console.log(req.body)
  ClaseModel.create(clase)
    .then(function (clase) {
      res.status(201).json(clase)
    })
}
// edita los datos del elemento del cual le paso el "id" (edita los campos que le mando en el body, si el campo ya existe: reemplaza la info por a nueva; si el campo no existe: lo crea con la nueva info que le mando EL resto de los datos quedan tal cual stan originalmente)
// llama a la función updateClase() de services (services:ClaseModel)
export function editOne (req, res) {
  const id = req.params.idClase
  const claseData = req.body
  //console.log(id, claseData);

  ClaseModel.updateClase(id, claseData)
    .then(function (clase) {
      if (clase) {
        res.status(200).json(clase)
      } else {
        res.status(404).json({ message: `La clase no se encuentra en el sistema.` }) // ok
      }
    })
}

// reemplaza los datos del elemento del cual le paso el "id" (reeplaza todos los atos existentes por los nuevos (borra loq ue están y soo deja los nuevos que le mando por body, ya sea que existan los campos o que sean nuevos)
// llama a la función changeOne() de services (services:ClaseModel)
export function changeOne (req, res) {
  const id = req.params.idClase
  const claseData = req.body
  console.log(claseData)
  console.log(id)


  ClaseModel.changeOne(id, claseData)
    .then(function (clase) {
      if (clase) {
        res.status(200).json(clase)
      } else {
        res.status(404).json({ message: `La clase no se encuentra en el sistema.` }) // ok
      }
    })
}

// elimina el elemento del cual le paso el "id"
// llama a la función removeOne() de services (services:ClaseModel)
export function removeOne (req, res) {
  const id = req.params.idClase

  ClaseModel.removeOne(id)
  .then(function (clases) {
    res.status(200).json(clases) // renderiza en formato json
  })
}

