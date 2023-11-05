// este simulador va a estar diseñado para recomendar un juego cuando disponemos de un tiempo especifico para jugar, debido a que una de las problematicas actuales es tener muchos juegos en la biblioteca pero poco tiempo para jugarlos

class Juego {
  constructor(id, nombre, genero, duracion, imagen) {
    (this.id = id),
      (this.nombre = nombre),
      (this.duracion = genero),
      (this.genero = duracion);
    this.imagen = imagen;
  }
}

let cargarBiblioteca = async () => {
  const resp = await fetch("games.json");
  const dataGame = await resp.json();
  for (let game of dataGame) {
    let newgame = new Juego(
      game.id,
      game.nombre,
      game.genero,
      game.duracion,
      game.imagen
    );
    biblioteca.push(newgame);
  }
  localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
  console.log(cargarBiblioteca);
};

// juegos precargados para la simulacion (algunos son de mi gusto personal, otros de consumo masivo)
let biblioteca = [];
if (localStorage.getItem("biblioteca")) {
  for (let game of JSON.parse(localStorage.getItem("biblioteca"))) {
    let gameLocal = new Juego(
      game.id,
      game.nombre,
      game.genero,
      game.duracion,
      game.imagen
    );
    biblioteca.push(gameLocal);
  }
} else {
  cargarBiblioteca();
}

// consultar que jugar hoy con mi tiempo disponible
// function consultarJuego(array) {
//   let tiempoDisponible = prompt(
//     "Ingrese el tiempo con el que dispone expresado en minutos (solo valores númericos)"
//   );
//   let busqueda = array.filter((elem) => elem.tiempoP <= tiempoDisponible);
//   // const recomendacion =
//   if (busqueda.length == 0) {
//     console.log(`No hay coincidencias con ${tiempoDisponible}`);
//   } else {
//     mostrarJuegos(busqueda);
//   }
// }

// Consultar un juego por el genero al que pertenece
// function buscarCategoria(array) {
//   let genero = prompt("Ingrese a que genero de juegos quisiera jugar");
//   let generoBuscado = array.filter((juegos) =>
//     juegos.categoria.includes(genero.toLowerCase())
//   );
//   if (generoBuscado.length == 0) {
//     console.log(
//       `No encontramos coincidencias con el genero deseado: ${genero}`
//     );
//   } else {
//     mostrarJuegos(generoBuscado);
//   }
// }

// function mostrarId(array) {
//   console.log(array);
//   console.log("Cual es el ID?");
//   for (let juego of array) juego.idJuego();
// }

// function eliminarJuego(array) {
//   mostrarId(array);
//   let eliminarId = parseInt(
//     prompt(
//       "Ingrese el ID del juego indicado en la consola (solo valores númericos)"
//     )
//   );
//   const coincidencia = array.find((elem) => elem.id === eliminarId);
//   if (!coincidencia) {
//     alert(`El id ingresado no existe`);
//     return;
//   }
//   let preguntaID = parseInt(
//     prompt(`Usted desea eliminar el juego ${coincidencia.nombre} 1: Si 2: No`)
//   );
//   switch (preguntaID) {
//     case 1:
//       let idBuscada = array.filter((elem) => elem.id !== eliminarId);
//       biblioteca = idBuscada;
//       alert("Usted eliminó el juego ingresado");
//       console.log(biblioteca);
//       break;
//     case 2:
//       break;
//     default:
//       alert("Ingrese una de las opciones detalladas (solo valores numéricos)");
//   }
// }
