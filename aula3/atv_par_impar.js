const readline = require('readline-sync');

const num = Number(readline.question('Digite um número: '));

if (!isNaN(num)) {
    num % 2 === 0 ? console.log(`${num} é par`) : console.log(`${num} é impar`)
} else {
    console.log('Valor não numérico');
}
