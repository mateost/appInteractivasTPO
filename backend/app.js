import express from "express";
import { createServer } from "http";
import ClaseRoute from "./routes/clases.route.js";
import UsuarioRoute from "./routes/usuarios.route.js";
import UserRoute from "./routes/auth.route.js";
import cors from "cors";
import * as SocketIO from "socket.io";
import multer from "multer";

const app = express(); // crea el objeto de la aplicacion
const server = createServer(app); // crea el servidor
const serverSocket = new SocketIO.Server(server, {
  cors: {
    origin: `*`, // puerto de React
    methods: ["GET", "POST"], // verbos que vamos a poder utilizar
  },
  transports: ["websocket"], // la forma en que va a transferir los paquetes es websocket
}); // crea socket

const socketClient = serverSocket.on("connection", (socket) => {
  //se lo manda a todos
  // socket.emit('welcome', 'Hola que hace, soy el servidor web') //algo cuando se conecta
  // socket.on('disconnect', () => { //algo cuando se desconecta
});

app.use(cors()); // permite que se puedan hacer peticiones desde cualquier origen
app.use("/", express.static("public"));
app.use(express.urlencoded({ extended: false })); // ParseBody urlencoded
app.use(express.json());
app.all("*", (req, res, next) => {
  //creando un middleware
  const url = req.url; //le pongo la url
  const methods = req.method;
  const message = `${methods} ${url}`;
  if (socketClient) {
    socketClient.emit("action", message);
    req.socketClient = socketClient;
    // req.socketClient = serverSocket.of('/') // en el req tengo el socket cliente - de aca se va a la api, en su proyecto
    //projects, en el  nuestro peliculas y va al create - serversocket.of("/") equivalente a mandarselo a todos
    //socketClient.emit('peliculas', {name: 'Hola' })
  }
  next();
});

app.use("/", ClaseRoute);
app.use("/", UsuarioRoute);
app.use("/", UserRoute);

app.get("/hola", (req, res) => {
  if (socketClient) {
    socketClient.emit("welcome", "Estoy entrando a la web /hola");
  }
  res.send("Hola Mundo");
});

// Escucha el puerto y si funciona, ejecuta la funcion
server.listen(2032, function () {
  console.log("Me conecte al puerto! http://localhost:2032 ");
});

//funcion para subir foto
var storage = multer.diskStorage({
  //define el donde y como
  destination: function (req, file, cb) {
    //cb parametros de la function de destination
    cb(null, `../Front/public/img/${req.params.seccion}`); //directorio +
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });
app.post("/api/upload/:seccion", upload.single("NOMBRE"), (req, res) => {
  //seccion se usa para definir el directorio
  const image = req.image;
  res.status(200).json({ message: "File uploaded successfully.", image });
});
//este funcion sirve para todos!, el tema es como se llama desde el front.
