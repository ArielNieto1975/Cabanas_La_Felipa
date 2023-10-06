window.addEventListener("pageshow", () => {
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("telefono").value = "";
	document.getElementById("message").value = "";
});

function validarNombre(name) {
    if (name === "") {
        alert("Por favor, introduce tu nombre");
        return false;
    }
    return true;
}

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un correo electrónico válido");
        return false;
    }
    return true;
}

function validarTelefono(telefono) {
    const telefonoRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, introduce un número de teléfono válido");
        return false;
    }
    return true;
}

function validarConsulta(consulta) {
    if (consulta === "") {
        alert("Por favor, introduce tu consulta");
        return false;
    }
    return true;
}

function validarFormulario() {
	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const telefono = document.getElementById("telefono").value.trim();
	const consulta = document.getElementById("message").value.trim();
	
	if (!validarNombre(name) || !validarEmail(email) || !validarTelefono(telefono) || !validarConsulta(consulta)) {
        return false;
    }

	return true;
}

const submitBtn = document.querySelector(".enviar");
submitBtn.addEventListener("click", validarFormulario);
