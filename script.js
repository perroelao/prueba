// JavaScript para agregar funcionalidad de cambio de color
document.getElementById("btnCambiarColor").addEventListener("click", function() {
    // Cambia el color de fondo aleatoriamente
    let colores = ["#FF6347", "#87CEEB", "#FF69B4", "#FFD700", "#ADFF2F"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});
