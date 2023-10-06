window.addEventListener("pageshow", () => {
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("telefono").value = "";
	document.getElementById("message").value = "";
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("telefonoError").textContent = "";
    document.getElementById("consultaError").textContent = "";
});

document.getElementById("name").addEventListener("input", () => {
    document.getElementById("nameError").textContent = "";
});

document.getElementById("email").addEventListener("input", () => {
    document.getElementById("emailError").textContent = "";
});

document.getElementById("telefono").addEventListener("input", () => {
    document.getElementById("telefonoError").textContent = "";
});

document.getElementById("message").addEventListener("input", () => {
    document.getElementById("consultaError").textContent = "";
});

function validarNombre(name) {
    const nameError = document.getElementById("nameError");
    if (name === "") {
        nameError.textContent = "Por favor, introduce tu nombre";
        return false;
    }
    nameError.textContent = "";
    return true;
}

function validarEmail(email) {
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Por favor, introduce un correo electrónico válido";
        return false;
    }
    emailError.textContent = "";
    return true;
}

function validarTelefono(telefono) {
	const telefonoError = document.getElementById("telefonoError");
    const telefonoRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    if (!telefonoRegex.test(telefono)) {
        telefonoError.textContent = "Por favor, introduce un número de teléfono válido";
        return false;
    }
    return true;
}

function validarConsulta(consulta) {
	const consultaError = document.getElementById("consultaError");
    if (consulta === "") {
        consultaError.textContent = "Por favor, introduce tu consulta";
        return false;
    }
    return true;
}

function validarFormulario(event) {
	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const telefono = document.getElementById("telefono").value.trim();
	const consulta = document.getElementById("message").value.trim();
	
	if (!validarNombre(name) || !validarEmail(email) || !validarTelefono(telefono) || !validarConsulta(consulta)) {
		event.preventDefault();
        return false;
    }

	return true;
}

const submitBtn = document.querySelector(".enviar");
submitBtn.addEventListener("click", validarFormulario);
