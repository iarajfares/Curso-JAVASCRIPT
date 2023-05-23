let numero = 10;
let factorial = 1;
let contador = numero;

while (true) {
    if (contador === 0) {
    break;
    }
    factorial *= contador;
    contador--;
}

console.log(factorial)