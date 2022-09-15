function registrarUsuario() {
    if (inputNombre.value && inputPass.value) {
        usuarios.push(new Usuario(inputNombre.value, inputPass.value))
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        alert("registro exitoso")
        inputNombre.value = ""
        inputPass.value = ""
    } else {
        alert("falta ingresar un valor")
    }
}

function loginUsuario() {
    debugger
    let encontrado = false
    let listUsuarios = JSON.parse(localStorage.getItem("usuarios"))
    listUsuarios.forEach((usuario) => {
        if (encontrado) {
            return
        }
        if (usuario.nombre === inputNombre.value && usuario.pass === inputPass.value) {
            divLogin.innerHTML = ""
            estado.innerHTML = `Bienvenido ${inputNombre.value}`
            estado.className = ""
            encontrado = true
        }
        else {
            estado.innerText = "usuario o contraseña incorrectos"
            estado.className = "text-rojo"
        }
    })
}