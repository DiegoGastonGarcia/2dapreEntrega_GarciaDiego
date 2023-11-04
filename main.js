let gameDiv = document.getElementById("containerJuegos");
let agregarJuegoBtn = document.getElementById("agregarBtn");
let eliminarJuegoBtn = document.getElementById("deleteBtn");

function mostrarJuego(array) {
  gameDiv.innerHTML = "";
  for (let juego of biblioteca) {
    let cardJuego = document.createElement("div");
    cardJuego.className = "col-4";
    cardJuego.innerHTML = `
    <div class="card" style="width: 18rem;">
                    <img src="./assets/images/${juego.imagen}" class="card-img-top" alt="No cargo la imagen pa">
                    <div class="card-body">
                      <h5 class="card-title">${juego.nombre}</h5>
                      <p class="card-text">Pertenece al genero de ${juego.genero} y la duracion promedio de una partida es de ${juego.duracion} minutos.</p>
                      <button class="btn btn-primary" id="deleteBtn" >Eliminar Juego</button>
                    </div>
                  </div>`;
    gameDiv.append(cardJuego);
  }
}

function juegoNuevo(array) {
  let nombre = document.getElementById("nombreJuego");
  let genero = document.getElementById("generoJuego");
  let duracion = document.getElementById("duracionJuego");
  const nuevoJuego = new Juego(
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
  localStorage.setItem("bliblioteca", JSON.stringify(biblioteca));
}

agregarJuegoBtn.addEventListener("click", () => {
  console.log("escucho el boton");
  juegoNuevo(biblioteca);
  mostrarJuego(biblioteca);
});

document.addEventListener("DOMContentLoaded", (event) => {
  mostrarJuego(biblioteca);
});
