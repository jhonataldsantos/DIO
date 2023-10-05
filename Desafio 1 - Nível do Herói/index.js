/*
- DESAFIO 1 -
Crie uma variável para armazenar o nome e a quantidade de experiência de um herói, depois utilize uma estrutura
de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 6.000 = Ouro
Se XP for entre 6.001 e 7.000 = Diamante
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

- SAÍDA -
Ao final deve exibir uma mensagem:
"O herói de nome **{nome}** está no nível de **{nível}**
*/

let nomeDoHeroi = "Jhonata Lopes"; //Variável com nome do herói.
let xpDoHeroi = 7001; //Variável com o tanto de XP que o herói tem.
let nivelDoHeroi = ""; //Variável com a alcunha do nível do herói.

if (xpDoHeroi <= 1000) {
    nivelDoHeroi = "Ferro";
} else if (1001 <= xpDoHeroi && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (2001 <= xpDoHeroi && xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (5001 <= xpDoHeroi && xpDoHeroi <= 6000) {
    nivelDoHeroi = "Ouro";
} else if (6001 <= xpDoHeroi && xpDoHeroi <= 7000) {
    nivelDoHeroi = "Diamante";
} else if (7001 <= xpDoHeroi && xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (8001 <= xpDoHeroi && xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (9001 <= xpDoHeroi && xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
} //Note que em todos as estruturas condicionais, ele recebeu uma alcunha diferente referente ao XP selecionado, assim como no desafio.

console.log("O herói de nome "+nomeDoHeroi+" está no nível de "+nivelDoHeroi); //Aqui está a saída do programa com o nome e o nível