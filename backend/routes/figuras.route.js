import express from 'express' // imporando el objeto express por defecto
import * as FigurasController from '../controllers/figuras.api.controller.js' // importando el controlador
import { autentication } from '../middleware/autentication.middleware.js'
const route = express.Router()



route.all('/api/intranet/*', autentication)
// route.all('/api/*', autentication)
// me trae de la DB todo el listado completo de elementos
//url: /api/figuras que llama a la función: find()
//MoviesGrid
route.get('/api/figuras', FigurasController.find)

// guarda un nuevo elemento en le DB
//url: /api/figuras que llama a la función: create()
// debe ser un formulario para crear una nueva pelìcula
// debe ser un formulario para crear una nueva pelìcula
route.post('/api/intranet/figuras', FigurasController.create)

// me trae de la DB un solo elemento por su "id"
//url: /api/figuras/:idFigura que llama a la función: find()
//FiguraView.jsx
route.get('/api/figuras/:idFigura', FigurasController.findOne)

// edita los datos del elemento del cual le paso el "id" (edita los campos que le mando en el body, si el campo ya existe: reemplaza la info por a nueva; si el campo no existe: lo crea con la nueva info que le mando EL resto de los datos quedan tal cual stan originalmente)
//url: /api/figuras que llama a la función: editOne()
// debe ser un formulario para editar (modifica parcialmente)
route.patch('/api/intranet/figuras/:idFigura', FigurasController.editOne)

// reemplaza los datos del elemento del cual le paso el "id" (reeplaza todos los atos existentes por los nuevos (borra loq ue están y soo deja los nuevos que le mando por body, ya sea que existan los campos o que sean nuevos)
//url: /api/figuras/:idFigura que llama a la función: changeOne()
// debe ser un formulario para editar (reemplaza todo)
route.put('/api/intranet/figuras/:idFigura', FigurasController.changeOne)

// elimina el elemento del cual le paso el "id"
//url: /api/figuras/:idFigura que llama a la función: removeOne()
//botòn para eliminar la pelìcula
route.delete('/api/intranet/figuras/:idFigura', FigurasController.removeOne)

export default route
