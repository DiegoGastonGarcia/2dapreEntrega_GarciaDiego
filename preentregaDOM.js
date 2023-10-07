import juegos from "./juegos.json" assert { type: "json" };

function mostrarJuego(containerGames) {
  for (let juego of juegos) {
    let cardJuego = document.createElement("div");
    cardJuego.className = "col-4";
    cardJuego.innerHTML = `
    <div class="card" style="width: 18rem;">
                    <img src="./assets/images/${juego.imagen}" class="card-img-top" alt="No cargo la imagen papi">
                    <div class="card-body">
                      <h5 class="card-title">${juego.nombre}</h5>
                      <p class="card-text">Pertenece al genero de ${juego.genero} y la duracion promedio de una partida es de ${juego.duracion} minutos.</p>
                      <button class="btn btn-primary">Eliminar Juego</button>
                    </div>
                  </div>`;
    containerGames.append(cardJuego);
  }
}

function juegoNuevo(array) {
  let nombre = document.getElementById("nombreJuego");
  let genero = document.getElementById("generoJuego");
  let duracion = document.getElementById("duracionJuego");
  const nuevoJuego = new juego(
    array.length + 1,
    nombre.value,
    genero.value,
    parseInt(duracion.value),
    "newgame.jpg"
  );
  array.push(nuevoJuego);
  nombre.value = "";
  genero.value = "";
  duracion.value = "";
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("me lo escucho");
  let containerGames = document.getElementById("games");
  mostrarJuego(containerGames);
});
