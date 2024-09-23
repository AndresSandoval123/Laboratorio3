const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const contrPag = require("./controlador/contrPag"); // Importo el controlador

const port = 3000;
const hostname = "localhost"

const app = express(); // Con esto le decimos que traiga todas las caracteristicas de express para poder usarla.

app.use(cors()); // Permite todas las solicitudes CORS

app.use(express.static(path.join(__dirname, `vista`)));//Establece la ruta de donde express debe tomar los archivos.

// Ruta para manejar la solicitud a las páginas.
app.get(`/:pagina`, (req, res) => {
  const pagina = req.params.pagina;
  res.sendFile(path.join(__dirname, 'vista/public', pagina)); // Sirve el archivo correspondiente
});

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname, "/vista/public/index.html")); //Se establece el index como muestra al principio.
});

// Se crea el servidor.
const server = http.createServer(app);
// Para que funcione o escuche nuestro servidor
server.listen(port, hostname, () => {
  console.log(`servidor en ejecución en http://${hostname}:${port}`);
});