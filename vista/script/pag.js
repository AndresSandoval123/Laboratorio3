document.getElementById('verPaginaBtn').addEventListener('click', function() {
    const paginaSeleccionada = document.getElementById('paginaSelect').value;
    const iframe = document.getElementById('iframeContent');

    if (paginaSeleccionada) {
        iframe.src = `/pagina/${paginaSeleccionada}`;
    } else {
        alert("Por favor, selecciona una página.");
    }
});
