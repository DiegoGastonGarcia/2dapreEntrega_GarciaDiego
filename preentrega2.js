// este simulador va a estar diseñado para recomendar un juego cuando disponemos de un tiempo especifico para jugar, debido a que una de las problematicas actuales es tener muchos juegos en la biblioteca pero poco tiempo para jugarlos

class Juego {
  constructor(id, nombre, tiempoP, categoria, imagen) {
    (this.id = id),
      (this.nombre = nombre),
      (this.tiempoP = tiempoP),
      (this.categoria = categoria);
    this.imagen = imagen;
  }
  infoJuego() {
    console.log(
      `El juego es ${this.nombre}, su partida dura en promedio ${this.tiempoP} minutos y pertenece al/los genero/s de ${this.categoria}.`
    );
  }
  recoJuego() {
    console.log(
      `${this.nombre} que pertence al/los genero/s de ${this.categoria}`
    );
  }
  idJuego() {
    console.log(`El id de ${this.nombre} es ${this.id}`);
  }
}

// juegos precargados para la simulacion (algunos son de mi gusto personal, otros de consumo masivo)
let instalados = [];

instalados.push(juego1, juego2, juego3, juego4, juego5, juego6, juego7);

function mostrarJuegos(array) {
  console.log(array);
  console.log("Los juegos disponibles son:");
  for (let juego of array) juego.recoJuego();
}

// consultar que jugar hoy con mi tiempo disponible
function consultarJuego(array) {
  let tiempoDisponible = prompt(
    "Ingrese el tiempo con el que dispone expresado en minutos (solo valores númericos)"
  );
  let busqueda = array.filter((elem) => elem.tiempoP <= tiempoDisponible);
  // const recomendacion =
  if (busqueda.length == 0) {
    console.log(`No hay coincidencias con ${tiempoDisponible}`);
  } else {
    mostrarJuegos(busqueda);
  }
}

// agregar un juego que deseo incluir en la recomendacion
function agregarJuego() {
  let nombre = prompt("Ingrese el nombre del juego");
  let tiempoP = prompt(
    "Ingrese la duracion de la partida (expresado en minutos)"
  );
  let generos = prompt(`Ingrese los generos de ${nombre}`);

  const nuevoJuego = new Juego(instalados.length + 1, nombre, tiempoP, generos);
  console.log(nuevoJuego);
  instalados.push(nuevoJuego);
}

// visualizador de juegos dispobibles para la recomendacion
function juegosInstalados(array) {
  console.log("Los juegos instalados son ");
  for (let juego of array) {
    juego.infoJuego();
  }
}

// Consultar un juego por el genero al que pertenece
function buscarCategoria(array) {
  let genero = prompt("Ingrese a que genero de juegos quisiera jugar");
  let generoBuscado = array.filter((juegos) =>
    juegos.categoria.includes(genero.toLowerCase())
  );
  if (generoBuscado.length == 0) {
    console.log(
      `No encontramos coincidencias con el genero deseado: ${genero}`
    );
  } else {
    mostrarJuegos(generoBuscado);
  }
}

function mostrarId(array) {
  console.log(array);
  console.log("Cual es el ID?");
  for (let juego of array) juego.idJuego();
}

function eliminarJuego(array) {
  mostrarId(array);
  let eliminarId = parseInt(
    prompt(
      "Ingrese el ID del juego indicado en la consola (solo valores númericos)"
    )
  );
  const coincidencia = array.find((elem) => elem.id === eliminarId);
  if (!coincidencia) {
    alert(`El id ingresado no existe`);
    return;
  }
  let preguntaID = parseInt(
    prompt(`Usted desea eliminar el juego ${coincidencia.nombre} 1: Si 2: No`)
  );
  switch (preguntaID) {
    case 1:
      let idBuscada = array.filter((elem) => elem.id !== eliminarId);
      instalados = idBuscada;
      alert("Usted eliminó el juego ingresado");
      console.log(instalados);
      break;
    case 2:
      break;
    default:
      alert("Ingrese una de las opciones detalladas (solo valores numéricos)");
  }
}

// menú de la app
function opciones() {
  let salir = false;
  do {
    let menuOptions = parseInt(
      prompt(`Ingrese la opción deseada
       1 - Que voy a jugar?
       2 - Agregar juego
       3 - Juegos instalados
       4 - Buscar por género
       5 - Eliminar un juego
       0 - Salir`)
    );
    switch (menuOptions) {
      case 1:
        consultarJuego(instalados);
        break;
      case 2:
        agregarJuego(instalados);
        break;
      case 3:
        juegosInstalados(instalados);
        break;
      case 4:
        buscarCategoria(instalados);
        break;
      case 5:
        eliminarJuego(instalados);
        break;
      case 0:
        console.log(`Disfrute su partida`);
        salir = true;
        break;
      default:
        console.log(
          "Opción no válida,por favor utilice alguna presente en el menu"
        );
        break;
    }
  } while (!salir);
}
// opciones();
