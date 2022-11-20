import * as PeliculaModel from '../services/peliculas.db.service.js'

// me trae de la DB todo el listado completo de elementos
// llama a la función find() de services (services:PeliculaModel)
export function find (req, res) {
  PeliculaModel.find()
    .then(function (peliculas) {
      res.status(200).json(peliculas)
    })
}

// me trae de la DB un solo elemento por su "id"
// llama a la función findOne() de services (services:PeliculaModel)
export function findOne (req, res) {
  const id = req.params.idPelicula
  PeliculaModel.findOne(id)
    .then(function (pelicula) {
      if (pelicula) {
        res.status(200).json(pelicula)
        //req.socketClient.emit('pelicula',JSON.stringify(pelicula)+`La película se encontro.`) 
      } else {
        res.status(404).json({ message: `La película #${id} no se encuentra en el sistema.` }) // ok
      }
    })
}

// guarda un nuevo elemento en le DB
// llama a la función create() de services (services:PeliculaModel)
export function create (req, res) {
  const pelicula = req.body
  console.log(req.body)
  PeliculaModel.create(pelicula)
    .then(function (pelicula) {
      req.socketClient.emit('new-pelicula', JSON.stringify(pelicula))
      res.status(201).json(pelicula)
    })
}
// edita los datos del elemento del cual le paso el "id" (edita los campos que le mando en el body, si el campo ya existe: reemplaza la info por a nueva; si el campo no existe: lo crea con la nueva info que le mando EL resto de los datos quedan tal cual stan originalmente)
// llama a la función updatePelicula() de services (services:PeliculaModel)
export function editOne (req, res) {
  const id = req.params.idPelicula
  const peliculaData = req.body
  //console.log(id, peliculaData);

  PeliculaModel.updatePelicula(id, peliculaData)
    .then(function (pelicula) {
      if (pelicula) {
        res.status(200).json(pelicula)
      } else {
        res.status(404).json({ message: `La película no se encuentra en el sistema.` }) // ok
      }
    })
}

// reemplaza los datos del elemento del cual le paso el "id" (reeplaza todos los atos existentes por los nuevos (borra loq ue están y soo deja los nuevos que le mando por body, ya sea que existan los campos o que sean nuevos)
// llama a la función changeOne() de services (services:PeliculaModel)
export function changeOne (req, res) {
  const id = req.params.idPelicula
  const peliculaData = req.body
  console.log(peliculaData)
  console.log(id)


  PeliculaModel.changeOne(id, peliculaData)
    .then(function (pelicula) {
      if (pelicula) {
        res.status(200).json(pelicula)
      } else {
        res.status(404).json({ message: `La pelicula no se encuentra en el sistema.` }) // ok
      }
    })
}

// elimina el elemento del cual le paso el "id"
// llama a la función removeOne() de services (services:PeliculaModel)
export function removeOne (req, res) {
  const id = req.params.idPelicula

  PeliculaModel.removeOne(id)
  .then(function (peliculas) {
    res.status(200).json(peliculas) // renderiza en formato json
  })
}

