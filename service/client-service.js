function getPokemon(startId, endId) {
    for (let id = startId; id <= endId; id++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
          //console.log(data.sprites.front_default);

        })
        .catch(error => console.error(error));
    }
  }

  export{
    getPokemon
  }