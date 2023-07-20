const maze = document.getElementById('maze');
const cells = [];

// Definir el laberinto
const mazeData = [
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
];

// Crear las celdas del laberinto
for (let i = 0; i < mazeData.length; i++) {
  for (let j = 0; j < mazeData[i].length; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    if (mazeData[i][j] === 1) {
      cell.classList.add('wall');
    } else if (i === 0 && j === 1) {
      cell.classList.add('entry');
      cell.innerHTML = "Entrada";
    } else if (i === mazeData.length - 1 && j === mazeData[i].length - 2) {
      cell.classList.add('exit');
      cell.innerHTML = "Salida";
    }

    maze.appendChild(cell);
    cells.push(cell);
  }
}

// Posición actual del jugador
let playerPosition = 1;

// Evento de teclado para mover al jugador
document.addEventListener('keydown', (event) => {
  const key = event.key;

  let newPosition = playerPosition;

  if (key === 'ArrowUp' && playerPosition - mazeData[0].length >= 0 && !cells[playerPosition - mazeData[0].length].classList.contains('wall')) {
    newPosition = playerPosition - mazeData[0].length;
  } else if (key === 'ArrowDown' && playerPosition + mazeData[0].length < mazeData.length * mazeData[0].length && !cells[playerPosition + mazeData[0].length].classList.contains('wall')) {
    newPosition = playerPosition + mazeData[0].length;
  } else if (key === 'ArrowLeft' && playerPosition % mazeData[0].length !== 0 && !cells[playerPosition - 1].classList.contains('wall')) {
    newPosition = playerPosition - 1;
  } else if (key === 'ArrowRight' && (playerPosition + 1) % mazeData[0].length !== 0 && !cells[playerPosition + 1].classList.contains('wall')) {
    newPosition = playerPosition + 1;
  }

  if (newPosition !== playerPosition) {
    cells[playerPosition].classList.remove('player');
    cells[newPosition].classList.add('player');
    playerPosition = newPosition;
  }

  if (cells[playerPosition].classList.contains('exit')) {
    alert('¡Has ganado!');
    resetGame();
  }
});

// Reiniciar el juego
function resetGame() {
  cells[playerPosition].classList.remove('player');
  playerPosition = 1;
  cells[1].classList.add('player');
}
