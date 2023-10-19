/*
# Desafio 2️⃣ Calculadora de partidas Rankeadas

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

//Primeiro iremos criar três funções: Uma para receber as vitórias/derrotas e calcular o saldo; A segunda basicamente irá receber o saldo
//e validar qual o rank do personagem; A terceira só exibirá a mensagem na tela.

let playerWins = 112
let playerLosses = 113
var balance = getBalance(playerWins, playerLosses)
var rank = getRank(balance) 
//Detalhe, declarei tanto a variável balance quanto a rank global, pois utilizarei ambas dentro das funções.
//Contudo eu poderia ter declarado ambas como let, e criado uma variável local dentro das funções para funcionar normalmente.
printMessage(rank, balance)

function getBalance(playerWins, playerLosses) { //Primeira função para conseguir o saldo. Utilizei o if, pois não há saldo negativo nesse caso.
    if (playerLosses>playerWins) {
        balance = 0;
    } else {
        balance = playerWins - playerLosses;
    }
    return balance;
}

function getRank(balance) { //Segunda função para conseguir o rank conforme o saldo de vitórias.
    if(balance<=10) {
        rank = "Ferro"
    } else if(balance>=11 && balance <=20) {
        rank = "Bronze"
    } else if(balance>=21 && balance <=50) {
        rank = "Prata"
    } else if(balance>=51 && balance <=80) {
        rank = "Ouro"
    } else if(balance>=81 && balance <=90) {
        rank = "Diamante"
    } else if(balance>=91 && balance <=100) {
        rank = "Lendário"
    } else if(balance>=101) {
        rank = "Imortal"
    }
    return rank
}

function printMessage (rank, balance) { //Terceira função é só a saída da mensagem na tela.
    console.log("O Herói tem de saldo de "+balance+" e está no nível de "+rank)
}