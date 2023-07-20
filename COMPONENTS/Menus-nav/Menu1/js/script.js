// Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

// Declaramos variables
let side_menu = document.getElementById("menu_side");
let btn_open = document.getElementById("btn_open");
let body = document.getElementById("body");
let menu_options = document.querySelectorAll(".option"); // Obtener todos los elementos del menú

// Función para mostrar y ocultar menú
function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}

// Agregar evento click a cada opción del menú
menu_options.forEach((option) => {
    option.addEventListener("click", () => {
        // Remover clase "selected" de todos los elementos del menú
        menu_options.forEach((opt) => opt.classList.remove("selected"));
        // Agregar clase "selected" solo al elemento clicado
        option.classList.add("selected");
    });
});

// Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página
if (window.innerWidth < 760) {
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

// Haciendo el menú responsive (adaptable)
window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760) {
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
});
