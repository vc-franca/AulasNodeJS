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

//shortcut pra if/else:
// (idade >= 18) ? console.log('maior de idade') : console.log('menor de idade');

/* ------------------------------- CÁLCULO IMC ------------------------------ */

const peso = Number(readline.question('Qual o seu peso (kg)? '));
const altura = Number(readline.question('Qual a sua altura (m)? '));

if (!isNaN(peso) && !isNaN(altura)) {
    const imc = peso / (altura **2);
    console.log(`Seu IMC é ${imc.toFixed(2)}`);

    imc < 17 ? console.log('Muito abaixo do peso') :
    imc < 18.5 ? console.log('Abaixo do peso') :
    imc < 25 ? console.log('Peso normal') :
    imc < 30 ? console.log('Sobrepeso') :
    imc < 35 ? console.log('Obesidade I') :
    imc < 40 ? console.log('Obesidade II (severa') : 
    console.log('Obesidade III (mórbida)');
} else {
    console.log('Valores inválidos');
}

