// DOM
let gameDiv = document.getElementById("containerJuegos");
let consultaBtn = document.getElementById("consulta");
let agregarJuegoBtn = document.getElementById("agregarBtn");
let espera = document.getElementById("espera");
// -------FIN-----

// FUNCIONES
function mostrarJuego(biblioteca) {
  gameDiv.innerHTML = "";
  for (let juego of biblioteca) {
    let cardJuego = document.createElement("div");
    cardJuego.className = "col-4";
    cardJuego.id = juego.id;
    cardJuego.innerHTML = `
    <div class="card" style="width: 18rem;">
                    <img src="./assets/images/${juego.imagen}" class="card-img-top" alt="No cargo la imagen pa">
                    <div class="card-body">
                      <h5 class="card-title">${juego.nombre}</h5>
                      <p class="card-text">Pertenece al genero de ${juego.genero} y la duracion promedio de una partida es de ${juego.duracion} minutos.</p>
                      <button class="btn btn-primary deleteBtn" id="botonEliminar${juego.id}" >Eliminar Juego</button>
                    </div>
                  </div>`;
    gameDiv.append(cardJuego);
  }
  for (let juego of biblioteca) {
    const btnDel = document.getElementById(`botonEliminar${juego.id}`);
    btnDel.addEventListener("click", () => {
      eliminarJuego(juego.id);
    });
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
  localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
}

// en proceso
// function consultar(array) {
//   let tiempoD = document.getElementById("tiempo")

// }
function eliminarJuego(id) {
  let cambios = localStorage.getItem("biblioteca");
  let idEliminada = JSON.parse(cambios).filter(
    (elem) => elem.id !== parseInt(id)
  );
  localStorage.setItem("biblioteca", JSON.stringify(idEliminada));
  let cardId = document.getElementById(id);
  cardId.remove();
  console.log(cardId);
}

// -------FIN-----

// LISTENERS
agregarJuegoBtn.addEventListener("click", () => {
  juegoNuevo(biblioteca);
  mostrarJuego(biblioteca);
});

consultaBtn.addEventListener("click", () => {
  console.log("anda");
});

document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    espera.remove();
    mostrarJuego(biblioteca);

    // let eliminarJuegoBtn = document.getElementsByClassName("deleteBtn");
    // for (let button of eliminarJuegoBtn) {
    //   button.addEventListener("click", () => {
    //     eliminarJuego(button.id);
    //     let mostrarCambios = localStorage.getItem("biblioteca");
    //     console.log(JSON.parse(mostrarCambios));
    //     mostrarJuego(JSON.parse(mostrarCambios));
    //   });
    // }
  }, 1700);
});
// -------FIN-----
