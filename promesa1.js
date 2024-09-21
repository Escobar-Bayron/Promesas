let numero = 6;

let verificarNumero = new Promise((resolve, reject) => {
    if (numero == '5') {
        resolve("El número es 5");
    } else {
        reject("El número no es 5");
    }
});

verificarNumero
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));