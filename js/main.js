let d = document;

// Escuchar event
d.addEventListener("keyup", ev =>{
    if (ev.target.matches("#Bus")){
        document.querySelectorAll(".card").forEach(name => {
            if (name.textContent.toLowerCase().includes(ev.target.value.toLowerCase())){
                name.classList.remove("filter")
            }else{
                name.classList.add("filter")
            }
        })
    }
})

// Definición de la función getCharacters que recibe una función "done" como argumento
function getCharacters(done) {
    // Realiza una solicitud a la API de Rick and Morty para obtener información sobre personajes
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => {
            // Verifica si la respuesta es exitosa (200-299)
            if (!response.ok) {
                throw new Error("No se pudo obtener los personajes.");
            }
            // Convierte la respuesta a JSON y la retorna
            return response.json();
        })
        .then(data => {
            // Llama a la función "done" y pasa el objeto JSON como argumento
            done(data);
        })
        .catch(error => {
            // Captura y maneja errores de la solicitud
            console.error("Error en la solicitud:", error);
        });
}

// Llama a la función getCharacters y proporciona una función anónima como argumento
getCharacters(data => {
    // Itera sobre cada personaje en el array "results"
    data.results.forEach(personaje => {
        // Crea un nuevo elemento "article" con la información del personaje
        const article = document.createRange().createContextualFragment(`
            <article class="card">
                <figure class="img__container">
                    <img src="${personaje.image}" alt="Personaje">
                </figure>

                <div class="card-text">
                    <h2>${personaje.name}</h2>
                    <p>${personaje.status}</p>
                </div>
            </article>
        `);

        // Encuentra el contenedor principal en el DOM y agrega el "article" creado
        const main = document.getElementById('sect');
        main.append(article);
    });
});

