//Se enviarán mails en diferentes situaciones (al completar el formulario de contacto, registrarse en el sitio, etc). Para ello, es necesario crear un servicio que permita enviarlos. Utilizaremos la API de sendgrid.Inicialmente, las tareas son:

// -Instalar librería que permita enviar emails utilizando sendgrid

// -Crear método que reciba como parámetro una dirección de email y realice un envío a la misma.

const constant = require("../../constant/const");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(constant.SENGRID_API_KEY_TESTING);

const msg = {
  to: "alejandromachulsky_1o@hotmail.com", // Change to your recipient
  from: "adway94@gmail.com", // Change to your verified sender
  subject: "Sengrid esta bueno papa, MIrA!",
  text: "and easy to do anywhere, even with Node.js",
  html: "<h1><strong>Mail enivado</strong><h1>",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
