const name = document.getElementById("name");
name.value = "";
const email = document.getElementById("email");
email.value = "";
const telefono = document.getElementById("telefono");
telefono.value = "";
const consultaTextarea = document.getElementById("message");
consultaTextarea.value = "";

/**
 * Valida un formulario de contacto y muestra alertas si los campos no son válidos.
 * @returns {boolean} Verdadero si el formulario es válido, falso si no lo es.
 */
function validarFormulario() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const consulta = document.getElementById("message").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex =
        /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

    if (name === "") {
        alert("Por favor, introduce tu nombre");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un correo electrónico válido");
        return false;
    }

    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, introduce un número de teléfono válido");
        return false;
    }

    if (consulta === "") {
        alert("Por favor, introduce tu consulta");
        return false;
    }

    return true;
}

const submitBtn = document.querySelector(".enviar");
submitBtn.addEventListener("click", validarFormulario);

/* Es posible enviar un correo electrónico con un formulario HTML y JavaScript sin utilizar una biblioteca externa. A continuación, se presentan algunas opciones para enviar correos electrónicos utilizando HTML y JavaScript sin bibliotecas externas:

1. Utilizar el atributo `mailto` en el formulario HTML. El atributo `mailto` permite especificar una dirección de correo electrónico en el atributo `action` del formulario. Cuando el usuario envía el formulario, se abre el cliente de correo electrónico predeterminado del usuario con la dirección de correo electrónico del destinatario y los datos del formulario en el cuerpo del correo electrónico. Es importante tener en cuenta que esta opción no es muy segura y puede no funcionar en todos los navegadores.

2. Utilizar un servicio de terceros para enviar correos electrónicos. Hay varios servicios de terceros que permiten enviar correos electrónicos utilizando HTML y JavaScript sin necesidad de utilizar una biblioteca externa. Algunos ejemplos de servicios de terceros son Formspree[4] y HeroTofu[3]. Estos servicios proporcionan una API que se puede utilizar para enviar correos electrónicos desde un formulario HTML utilizando JavaScript.

3. Utilizar un archivo PHP para enviar correos electrónicos. En lugar de utilizar una biblioteca externa de JavaScript, se puede utilizar un archivo PHP para enviar correos electrónicos desde un formulario HTML. El archivo PHP se encarga de recibir los datos del formulario y enviar el correo electrónico utilizando la función `mail()` de PHP. Es importante tener en cuenta que esta opción requiere conocimientos básicos de PHP y puede no funcionar en todos los servidores.

Es importante tener en cuenta que el envío de correos electrónicos utilizando HTML y JavaScript puede ser un proceso complejo y requiere conocimientos avanzados de programación. Además, es importante tomar medidas de seguridad para proteger la información confidencial de los usuarios, como las direcciones de correo electrónico y los mensajes de correo electrónico.
*/
