// este simulador va a estar diseñado para recomendar un juego cuando disponemos de un tiempo especifico para jugar, debido a que una de las problematicas actuales es tener muchos juegos en la biblioteca pero poco tiempo para jugarlos

class Juego{
    constructor(id,nombre, tiempoP, categoria){
        this.id = id,
        this.nombre= nombre,
        this.tiempoP = tiempoP,
        this.categoria = categoria
    }
    infoJuego() {
        console.log(`El juego es ${this.nombre}, su partida dura en promedio ${this.tiempoP} minutos y pertenece al/los genero/s de ${this.categoria} `)
    }
}

const juego1 = new Juego (1, "Counter-Strike", 60, "shotter, en linea")

const juego2 = new Juego (2, "The binding of isaac", 45, "roguelike")

const juego3 = new Juego (3, "God of War 2018", 330 , "acción, aventura" )

const juego4 = new Juego (4, "Clash Royale", 10, "constructor de barajas, en linea")

const juego5 = new Juego (5, "Slay the Spire",  70, "constructor de barajas, roguelike")

const juego6 = new Juego (6, "Risk Of Rain 2", 110, "roguelike, en linea")

const juego7 = new Juego (7, "Red Dead Redemption 2", 410, "accion, shooter")


// visualizador de juegos en posesion 
const instalados = []

instalados.push(juego1,juego2,juego3,juego4,juego5,juego6,juego7)
console.log(instalados)

function consultarJuego(array){
    let tiempoDisponible = prompt("Ingrese el tiempo con el que dispone (solo valores númericos)")
    let busqueda = array.filter(
        (elem) => elem.tiempoP <= tiempoDisponible
    )
    if(busqueda.length == 0){
        console.log(`No hay coincidencias con ${tiempoDisponible}`)
    }
    else{
        instalados(busqueda)

    }
}

function agregarJuego(){
    let nombre = prompt("Ingrese el nombre del juego")
    let tiempoP = prompt("Ingrese la duracion de la partida")
    let generos = prompt(`Ingrese los generos de ${nombre}`)
    
    const nuevoJuego = new Juego(instalados.length+1,nombre, tiempoP, generos)
    console.log(nuevoJuego)
    instalados.push(nuevoJuego)          
}

function juegosInstalados (array){
    console.log("Los juegos instalados son ")
    for(let juego of array){
        console.log(juego)
        juego.infoJuego()     
    }
}





function opciones(){
    let salir = false
    do{
    let menuOptions = parseInt(prompt(`Ingrese la opción deseada
       1 - Que voy a jugar?
       2 - Agregar juego
       3 - Juegos instalados
       4 - Buscar por género
       0 - Salir`))
       switch(menuOptions){
          case 1:
             consultarJuego(instalados)
          break
          case 2:
             agregarJuego(instalados)
          break
          case 3:
             juegosInstalados(instalados)
          break
          case 4:
            buscarCategoria(instalados)
           break             
          case 0:
             console.log(`Disfrute su partida`)
             salir = true
          break   
          default:
             console.log("Opción no válida,por favor utilice alguna presente en el menu")
          break
       }
    }while(!salir)
}
opciones()