const titulo = document.getElementById("titulo")
const tabla = document.getElementById("tablaPred")
const divLogin = document.getElementById("login")

function agregarPrediccion() {
    let fila = ""
    predicciones.forEach(Prediccion => {
        fila = `<tr>
                     <td>${Prediccion.id}</td>
                    <td>${Prediccion.partido}</td>
                    <td>${Prediccion.resultado}</td>
                </tr>`
        tabla.innerHTML += fila
    })
}

function cargarPredicciones() {
    tabla.innerHTML = ""
    let columna = `<thead>
                        <tr>
                            <th>ID</th>
                            <th>PARTIDO A DISPUTAR</th>
                            <th>PREDICCION ELEGIDA</th>
                        </tr>
                    </thead>`
    tabla.innerHTML += columna
    let fila = ""
    predicciones.forEach(Prediccion => {
        fila = `<tr>
                     <td>${Prediccion.id}</td>
                    <td>${Prediccion.partido}</td>
                    <td>${Prediccion.resultado}</td>
                </tr>`
        tabla.innerHTML += fila
    })
}

function loginUsuario() {
    let nombre = document.getElementById("usuarioNom")
    let pass = document.getElementById("usuarioPass")
    const estado = document.getElementById("estadoLogin")

    if (nombre.value === "usuario" & pass.value === "123") {
        cargarPredicciones()
        titulo.innerText = `Bienvenido ${nombre.value}`
        divLogin.innerHTML = ""
        estado.innerText = "Predicciones realizadas"
        estado.className = ""
    }
    else {
        estado.innerText = "usuario o contraseña incorrectos"
        estado.className = "text-rojo"
    }
}