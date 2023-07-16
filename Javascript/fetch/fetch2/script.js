    // Realizar una solicitud para obtener la lista de personajes de Star Wars
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        const characterGridContainer = document.getElementById('character-grid');

        // Recorrer la lista de personajes y crear elementos para mostrar la información
        data.results.forEach(character => {
          const characterCard = document.createElement('div');
          characterCard.classList.add('character-card');

          const image = document.createElement('img');
          fetch(`https://starwars-visualguide.com/assets/img/characters/${getImageId(character.url)}.jpg`)
            .then(response => response.blob())
            .then(blob => {
              image.src = URL.createObjectURL(blob);
            });
          characterCard.appendChild(image);

          const name = document.createElement('h2');
          name.textContent = character.name;
          characterCard.appendChild(name);

          const height = document.createElement('p');
          height.textContent = `Height: ${character.height}`;
          characterCard.appendChild(height);

          const mass = document.createElement('p');
          mass.textContent = `Mass: ${character.mass}`;
          characterCard.appendChild(mass);

          const hairColor = document.createElement('p');
          hairColor.textContent = `Hair Color: ${character.hair_color}`;
          characterCard.appendChild(hairColor);

          const skinColor = document.createElement('p');
          skinColor.textContent = `Skin Color: ${character.skin_color}`;
          characterCard.appendChild(skinColor);

          const eyeColor = document.createElement('p');
          eyeColor.textContent = `Eye Color: ${character.eye_color}`;
          characterCard.appendChild(eyeColor);

          const birthYear = document.createElement('p');
          birthYear.textContent = `Birth Year: ${character.birth_year}`;
          characterCard.appendChild(birthYear);

          const gender = document.createElement('p');
          gender.textContent = `Gender: ${character.gender}`;
          characterCard.appendChild(gender);

          characterGridContainer.appendChild(characterCard);
        });
      })
      .catch(error => {
        console.error('Error al obtener la lista de personajes:', error);
      });

    // Función auxiliar para extraer el ID de la URL del personaje
    function getImageId(url) {
      const matches = url.match(/\/(\d+)\/$/);
      if (matches && matches.length === 2) {
        return matches[1];
      }
      return '';
    }