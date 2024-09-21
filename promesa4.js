function verificarStock(cantidad) {
    return new Promise((resolve, reject) => {
        if (cantidad <= 100) {
            resolve(`Stock suficiente para ${cantidad}`);
        } else {
            reject('Stock insuficiente');
        }
    });
}

verificarStock(550)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));

