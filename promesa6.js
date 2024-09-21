function realizarCompra(monto) {
    return new Promise((resolve, reject) => {
        if (monto > 0) {
            resolve(`Compra completada por ${monto}`);
        } else {
            reject('Monto inválido para la compra');
        }
    });
}

realizarCompra(100)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));
