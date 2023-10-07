let d = document;

// Escuchar event
d.addEventListener("keyup", event =>{
    if (event.target.matches("#Bus")){
        document.querySelectorAll(".article").forEach(name => {
            if (name.textContent.toLowerCase().includes(event.target.value.toLowerCase())){
                name.classList.remove("filter")
            }else{
                name.classList.add("filter")
            }
        })
    }
})

function getCharacters(done) {
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo obtener los personajes.");
            }
            return response.json();
        })
        .then(data => {
            done(data);
        })
        .catch(error => {
            console.error("Error en la solicitud:", error);
        });
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
            <article class="article">
                <div class="img__container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
            </article>
        `);

        const main = document.querySelector('main');
        main.append(article);
    });
});
