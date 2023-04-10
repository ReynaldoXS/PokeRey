// function getPokemon(id){
//     const res=fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     res
//         .then(response => response.json())
//         .then(data =>{
//             //id(data)
//             console.log(data.sprites.front_default)
//     });

// }
// getPokemon(1)

// getPokemon(data =>{
//         data.res.forEach(pokemon => {
//             const article = document.createRange().createContextualFragment(/*html*/`
//             <article>
//                 <div class="image_container">
//                     <img src="" alt="poke_pic">
//                 </div>
                
//                 <h2>Pokemon ${pokemon.name}</h2>
//                 <span>Tipo</span>
    
//             </article>
//             `)
    
//             const main =document.querySelector("main");
//             main.append(article);
//         });
//         console.log(data)
//     });

//-------------------------------------------------------------------------------------------------------
// Funcion 1(correcta)
// function getPokemon(id) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//       .then(response => response.json())
//       .then(data => {
//         //console.log(data.sprites.front_default);
  
//         // Código para crear el artículo del Pokemon aquí
//         const article = document.createRange().createContextualFragment(/*html*/`
//           <article>
//             <div class="image_container">
//               <img src="${data.sprites.front_default}" alt="poke_pic">
//             </div>
//             <h2>Pokemon ${data.name}</h2>
//             <span>Tipo</span>
//           </article>
//         `);
  
//         const main = document.querySelector("main");
//         main.append(article);
//       })
//       .catch(error => console.error(error));
//   }
  
//   getPokemon(10);
//-------------------------------------------------------------------------------------------------------
//Funcion 2(correcta)
function getPokemon(startId, endId) {
    for (let id = startId; id <= endId; id++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
  
          // Código para crear el artículo del Pokemon aquí
          const article = document.createRange().createContextualFragment(/*html*/`
            <article>
              <div class="image_container">
                <img src="${data.sprites.front_default}" alt="poke_pic"
                </div>
              <h2>Pokemon ${data.name}</h2>
              <span>Id # <b>${id}</b></span>
              <span>Tipo #1 ${data.types[0].type.name}</span>
              <span>Tipo #2 ${data.types[1].type.name}</span>
            </article>
          `);
  
          const main = document.querySelector("main");
          main.append(article);
        })
        .catch(error => console.error(error));
    }
  }
  
  getPokemon(1, 3);
    
//-------------------------------------------------------------------------------------------------------
// function getPokemon(done){
//     const results = fetch("https://pokeapi.co/api/v2/pokemon");
    
//     results
//         .then(response => response.json())
//         .then(data =>{
//             done(data)
//         });
    
// }

// getPokemon(data =>{
//     data.results.forEach(pokemon => {
//         const article = document.createRange().createContextualFragment(/*html*/`
//         <article>
//             <div class="image_container">
//                 <img src="" alt="poke_pic">
//             </div>
            
//             <h2>Pokemon ${pokemon.name}</h2>
//             <span>Tipo</span>

//         </article>
//         `)

//         const main =document.querySelector("main");
//         main.append(article);
//     });
//     console.log(data.name)
// });


// const API_URL="https://pokeapi.co/api/v2/";

// const HTMLResponse= document.querySelector("#app");

// fetch(`${API_URL}/pokemon`)
//     .then((response) => response.json())
//     .then((pokemon) =>{
//         const tpl=pokemon.map(user =>`<li>${pokemon.name} <br> ${front_default}</li>`);
//         HTMLResponse.innerHTML=`<ul>${tpl}</ul>`
//     });

// console.log(pokemon)