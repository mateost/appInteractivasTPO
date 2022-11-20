import express from 'express'
import * as controller from '../controllers/auth.controller.js'

const route = express.Router()
route.post('/api/register', controller.create)
route.post('/api/login', controller.login)
route.post('/api/recuperarpass', controller.login)
export default route

//el Token tiene 3 parámetros 1(color rojo) es el header que dice què algoritmo està utilizando para encriptar, 2(color rosa) son los datos que estamos enviando por ej: el id del usuario, el permiso que posee, etc y el 3(color celeste) es la “llave” que hace todo lo demàs funciones y la ùnica forma de desencriptar èsa llave es teniendo una llave secreta (èsa clave secreta debe estar en el backend)

//El login es el que genera el Token (el login es un POST porque en realidad al loguearme estoy creando una sesiòn, no consultando si el usuario existe)
