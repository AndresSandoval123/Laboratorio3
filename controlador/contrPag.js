//Responsabilidad: Interactúa entre el modelo y la vista.
const modPag = require("../modelo/modPag.js");

exports.mostrarPagina = (req, res) => {
  const pagina = req.params.pagina; // Obtiene el nombre de la página.
  const archivoHtml = modPag.verPagina(pagina);
  res.sendFile(archivoHtml, (error) => {
    if (error) {
      res.status(error.status).end(); // Manejo de errores si el archivo no se encuentra
    }
  });
}
