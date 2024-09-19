const express = require("express");
const http = require("http");
const path = require("path");
const contrPag = require("./controlador/contrPag"); // Importo el controlador

const port = 3000;
const hostname = "localhost"

const app = express(); // Con esto le decimos que traiga todas las caracteristicas de express para poder usarla.

app.use(express.static(path.join(__dirname, `vista/public`)));//Establece la ruta de donde express debe tomar los archivos.
app.use(express.static(path.join(__dirname, `vista/styles`)));//Establece la ruta de donde express debe tomar los archivos.
app.use(express.static(path.join(__dirname, `vista/script`)));//Establece la ruta de donde express debe tomar los archivos.

// Ruta para manejar la solicutud a las páginas.
app.get(`/pagina/:pagina`, contrPag.mostrarPagina);

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname, "index.html")); //Se establece el index como muestra al principio.
});

// Se crea el servidor.
const server = http.createServer(app);
// Para que funcione o escuche nuestro servidor
server.listen(port, hostname, () => {
  console.log(`servidor en ejecución en http://${hostname}${port}`);
});