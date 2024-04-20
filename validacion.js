

function limpiarError(idError) {
    document.getElementById(idError).textContent = "";
}

//Validacion Nombre
function validarNombre() {
    limpiarError("error-nombre");
    var nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {
        document.getElementById("error-nombre").textContent = "El campo Nombre no puede estar vacío";
        habilitarBoton(false, true, true, true); // El nombre no es válido, los otros campos sí
        return false;
    }
    if (nombre.length > 50) {
        document.getElementById("error-nombre").textContent = "El campo Nombre debe tener máximo 50 caracteres";
        habilitarBoton(false, true, true, true); // El nombre no es válido, los otros campos sí
        return false;
    }

    // Si llega aquí, el nombre es válido
    habilitarBoton(true, true, true, true); // Todos los campos son válidos
    return true;
}

function validarEmail() {
    limpiarError("error-email");
    var email = document.getElementById("email").value.trim();

    if (email === "") {
        document.getElementById("error-email").textContent = "El campo E-mail no puede estar vacío";
        habilitarBoton(true, false, true, true);
        return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("error-email").textContent = "El campo E-mail debe tener un formato válido";
        habilitarBoton(true, false, true, true);
        return false;
    }

    habilitarBoton(true, true, true, true);
    return true;
}

function validarAsunto() {
    limpiarError("error-asunto");
    var asunto = document.getElementById("asunto").value.trim();
    if (asunto === "") {
        document.getElementById("error-asunto").textContent = "El campo Asunto no puede estar vacío";
        habilitarBoton(true, true, false, true);
        return false;
    }
    if (asunto.length > 50) {
        document.getElementById("error-asunto").textContent = "El campo Asunto debe tener máximo 50 caracteres";
        habilitarBoton(true, true, false, true);
        return false;
    }

    habilitarBoton(true, true, true, true);
    return true;
}

function validarMensaje() {
    limpiarError("error-mensaje");
    var mensaje = document.getElementById("mensaje").value.trim();
    if (mensaje === "") {
        document.getElementById("error-mensaje").textContent = "El campo Mensaje no puede estar vacío";
        habilitarBoton(true, true, true, false);
        return false;
    }
    if (mensaje.length > 300) {
        document.getElementById("error-mensaje").textContent = "El campo Mensaje debe tener máximo 300 caracteres";
        habilitarBoton(true, true, true, false);
        return false;
    }

    // Llamar a habilitarBoton() después de la validación
    habilitarBoton(true, true, true, true);

    return true;
}

function habilitarBoton(nombreValido, emailValido, asuntoValido, mensajeValido) {
    var botonEnviar = document.getElementById("boton-enviar");

    if (nombreValido && emailValido && asuntoValido && mensajeValido) {
        botonEnviar.disabled = false;
    } else {
        botonEnviar.disabled = true;
    }
}