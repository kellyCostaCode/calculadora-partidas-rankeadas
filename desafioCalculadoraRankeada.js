// Calculadora de Partidas Rankeadas
//Professor Felipão

let prompt = require("prompt-sync") ();

victory = prompt ("Escreva o número de vitórias: ");
lose = prompt ("Escreva o número de derrotas: ")

let saldoFinal = saldoVitorias(victory, lose)
let nivel = faixaVitorias(saldoFinal);


function saldoVitorias (victory, lose){
    return victory - lose;
}

function faixaVitorias (saldoFinal){
    if (saldoFinal <=10){
        return "Ferro";
    } else if (saldoFinal<=20){
        return "Bronze";
    } else if (saldoFinal<=50){
        return "Prata";
    } else if (saldoFinal<=80){
        return "Ouro";
    } else if (saldoFinal<=90){
        return "Diamante";
    } else if (saldoFinal<=100){
        return "Lendário";
    } else{
        return "Imortal";
    }
}

console.log (`O Herói tem de saldo ${saldoFinal} e está no nível ${nivel}`);