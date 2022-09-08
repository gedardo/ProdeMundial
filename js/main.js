const predicciones = []
const partidos = []

class Prediccion {
    constructor(id, partido, resultado) {
        this.id = id
        this.partido = partido
        this.resultado = resultado
    }
}

class Partido {
    constructor(id, partido) {
        this.id = id
        this.partido = partido
    }
}

function generadorPartidos() {
    partidos.push(new Partido(11, "ARGENTINA VS BRASIL"))
    partidos.push(new Partido(12, "ARGENTINA VS MEXICO"))
    partidos.push(new Partido(13, "BRASIL VS MEXICO"))
    partidos.push(new Partido(21, "ECUADOR VS COLOMBIA"))
    partidos.push(new Partido(22, "ECUADOR VS PANAMA"))
    partidos.push(new Partido(23, "COLOMBIA VS PANAMA"))
    partidos.push(new Partido(31, "CHILE VS BOLIVIA"))
    partidos.push(new Partido(32, "CHILE VS VENEZUELA"))
}

function generadorPredicciones() {
    predicciones.push(new Prediccion(11, "ARGENTINA VS BRASIL", "ARGENTINA"))
    predicciones.push(new Prediccion(12, "ARGENTINA VS MEXICO", "EMPATE"))
    predicciones.push(new Prediccion(13, "BRASIL VS MEXICO", "BRASIL"))
    predicciones.push(new Prediccion(21, "ECUADOR VS COLOMBIA", "ECUADOR"))
    predicciones.push(new Prediccion(22, "ECUADOR VS PANAMA", "ECUADOR"))
    predicciones.push(new Prediccion(23, "COLOMBIA VS PANAMA", "COLOMBIA"))
    predicciones.push(new Prediccion(31, "CHILE VS BOLIVIA", "EMPATE"))
    predicciones.push(new Prediccion(32, "CHILE VS VENEZUELA", "VENEZUELA"))
}

generadorPartidos()
generadorPredicciones()

function generarPrediccion(){
let idPartido = parseInt(prompt("ingresa el numero de partido a predecir:"))        	
let resultado = partidos.find((partido)=> partido.id === idPartido)
if (resultado !== undefined) {
    let prediccionPartido = prompt(`el partido es: ${resultado.partido}. Ingresa tu prediccion:`)
    nuevaPrediccion = new Prediccion (resultado.id, resultado.partido, prediccionPartido)
    console.log(nuevaPrediccion)
} else {
    console.warn("No se encontró el numero de partido.")
}
}

function listarPartidos() {
    partidos.forEach((partido)=> {
        console.table(partido)
    })
    console.table(partidos)
}