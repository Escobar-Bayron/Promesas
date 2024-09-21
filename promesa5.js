function verificarCodigoDescuento(codigo) {
    return new Promise((resolve, reject) => {
        if (codigo == 'DESCUENTO2024') {
            resolve("Codigo de descuento valido");
        } else {
            reject("Codigo de descuento invalido");
        }
    });
}

verificarCodigoDescuento('DESCUENTO2024')
    .then(mensaje => console.log(mensaje))  
    .catch(error => console.log(error));    