function cambiarContenido(boton) {
    if (boton.textContent === 'Clicar') {
      boton.textContent = 'Clicado';
      boton.style.backgroundImage = 'linear-gradient(45deg, #cc00cc, #660066)'; /* Color degradado morado a púrpura al ser clicado */
    } else {
      boton.textContent = 'Clicar';
      boton.style.backgroundImage = 'linear-gradient(45deg, #ff6600, #ff3300)'; /* Color degradado naranja a rojo */
    }
  }

// La función nos ayuda a cambiar el contenido en texto del botón y le agregamos un estilo específico de manera dinámica al botón.