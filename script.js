const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", function() {
    // Agrega o quita la clase "modo-claro" al body
    document.body.classList.toggle("modo-claro");

    // Cambia el texto del botón según el modo activo
    if (document.body.classList.contains("modo-claro")) {
        btnTema.innerText = "🌙 Cambiar a Modo Oscuro";
    } else {
        btnTema.innerText = "☀️ Cambiar a Modo Claro";
    }
});
