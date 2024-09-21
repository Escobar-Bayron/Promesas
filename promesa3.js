function enviarCorreo(email) {
    return new Promise((resolve, reject) => {
        if (email) {
            setTimeout(() => {
                resolve("Correo enviado");
            }, 2000); 
        } else {
            reject("Dirección de correo no proporcionada");
        }
    });
}

enviarCorreo("ejemplo@correo.com")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));