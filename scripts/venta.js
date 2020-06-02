
function sendEmail() {
    let nombre = document.getElementById("nombrePago").value;
    let email = document.getElementById("emailPago").value;
    alert(email)

    Email.send({
        Host : "smtp.gmail.com",
        Username : "m.olmedo@itecriocuarto.org.ar",
        Password : "joopkkajexrqqrtf",
        To : email,
        From : "m.olmedo@itecriocuarto.org.ar",
        Subject : "Test email",
        Body : "<html><h2>Confirmacion de pago</h2><strong>Gracias por confiar en nosotros "+ nombre + " </strong><br></br><em>Nos pondremos en contacto con usted en la brevedad. el joel se la come</em></html>"
    }).then(
      message => alert(message)
    );
    }