/* ------------------------ VERIFICAÇÃO DE MAIORIDADE ----------------------- */

const readline = require('readline-sync');

// const idade = Number(readline.question('Qual a sua idade? '));

// if (!isNaN(idade)) {
//     if (idade > 0 && idade < 130) {
//         if (idade >= 18) {
//             console.log('Maior de idade');
//         } else {
//             console.log('Menor de idade');
//         }
//     } else {
//         console.log('Idade irrealista');
//     }
// } else {
//     console.log('Valor não numérico');
// }

/* ------------------------------- CÁLCULO IMC ------------------------------ */

const peso = Number(readline.question('Qual o seu peso (kg)? '));
const altura = Number(readline.question('Qual a sua altura (m)? '));

if (!isNaN(peso) && !isNaN(altura)) {
    const imc = peso / (altura * altura);
    console.log(`Seu IMC é ${imc.toFixed(2)}`);
}