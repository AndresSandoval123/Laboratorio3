//Responsabilidad: Maneja la lógica de datos de la aplicación.
const path = require("path");

exports.verPagina = (pagina) => {
  return path.join(__dirname, '../vista/public', `${pagina}.html`);
};