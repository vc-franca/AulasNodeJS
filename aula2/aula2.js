// const readline = require('readline-sync');
// let idade = Number(readline.questionInt('Qual sua idade?: \n'));

// if (idade < 120 && idade > 0) {
//     if (idade < 18) {
//         console.log(`${idade} => Menor de idade`);
//     } else {
//         console.log(`${idade} => Maior de idade`);
//     }
// } else {
//     console.log('Idade inválida');
// }


/* -------------------------------------------------------------------------- */
/*                                    ATV2                                    */
/* -------------------------------------------------------------------------- */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual seu peso (kg)?: ', (peso) => {
    rl.question('Qual sua altura (m)?: ', (altura) => {
        // Converte as entradas para números
        let pesoNum = parseFloat(peso);
        let alturaNum = parseFloat(altura);

        if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
            console.log('Por favor, insira valores válidos.');
        } else {
            let imc = pesoNum / (alturaNum ** 2);
            console.log(`Seu IMC é: ${imc.toFixed(2)}`);

            if (imc < 18.5) {
                console.log('Abaixo do peso');
            } else if (imc < 25) {
                console.log('Peso normal');
            } else if (imc < 30) {
                console.log('Sobrepeso');
            } else {
                console.log('Obesidade');
            }
        }

        rl.close();
    });
});
