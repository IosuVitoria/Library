const opciones = ["piedra", "papel", "tijeras"];
const opcion = prompt("Introduce piedra, papel o tijera sin faltas de ortografía: ");
const eleccionPC = Math.floor(Math.random() * opciones.length);
const opcionConvertida = opcion.toLowerCase();
console.log(opcionConvertida);
console.log(eleccionPC);
const jugada = opciones[eleccionPC];
console.log(jugada);

const resultados = {
  piedra: { piedra: "Empate", papel: "Perdiste", tijeras: "Ganaste" },
  papel: { piedra: "Ganaste", papel: "Empate", tijeras: "Perdiste" },
  tijeras: { piedra: "Perdiste", papel: "Ganaste", tijeras: "Empate" }
};

console.log(resultados[opcionConvertida][jugada]);
