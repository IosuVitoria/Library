// Función para obtener información de un Pokémon por su ID
function getPokemonById(pokemonId) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => response.json())
    .then(data => {
      console.log(`Nombre: ${data.name}`);
      console.log(`Altura: ${data.height}`);
      console.log(`Peso: ${data.weight}`);
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
}

// Función para obtener información de un Pokémon por su nombre
function getPokemonByName(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
      console.log(`ID: ${data.id}`);
      console.log(`Nombre: ${data.name}`);
      console.log(`Altura: ${data.height}`);
      console.log(`Peso: ${data.weight}`);
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
}

// Ejemplo de uso
getPokemonById(25); // Obtener información del Pokémon con ID 25 (Pikachu)
getPokemonByName("charizard")

// Función para obtener información de todos los Pokémon
function getAllPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then(response => response.json())
      .then(data => {
        const pokemonList = data.results;
        pokemonList.forEach(pokemon => {
          console.log(`Nombre: ${pokemon.name}`);
          console.log(`URL: ${pokemon.url}`);
          console.log("--------------------");
        });
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
  }
  
  // Ejemplo de uso
  getAllPokemon(); // Obtener información de todos los Pokémon existentes
  