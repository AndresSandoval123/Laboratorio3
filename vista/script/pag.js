const verPaginaBtn = document.getElementById("verPaginaBtn");
const iframeContent = document.getElementById('iframeContent');


//...............................>
// Evento para ver la información
//...............................>

verPaginaBtn.addEventListener("click", () => {
  let paginaSeleccionada = document.getElementById('paginaSelect').value;
  let metodoSelect = document.getElementById("metodoSelect").value;

  if (paginaSeleccionada == "") {
    alert(" Selecciona una página, por favor");
    return; // Salé de la condición.
  }

  //...............................>
  // Conexión Back-end
  //...............................>

  const url = `http://localhost:3000/${paginaSeleccionada}`

  if (metodoSelect == "get") {
    fetch(url)
      .then(response => {
        if (response.ok) {
          console.log(`Conexión exitosa con el back-end que esta en la url ${url}`);
        } else {
          throw new Error("Error de conexión");
        }
        return response.text(); // Convierte la respuesta a texto (HTML)
      })
      .then(html => {
        iframeContent.srcdoc = html
      })
      .catch(error => {
        //Manejo de error
        console.log(`Hay un error con la petición ${error}`);
      });
  } else {
    alert(`Solo esta permitido consultar con el metodo "GET"`)
  }
});
