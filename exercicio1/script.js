/**Exercício 1

Utilizando o laço while, escreva um código que recebe um prompt 
perguntando se a pessoa deseja comer mais coxinhas. “S” deve 
representar “sim”, e “N” deve representar “não”. Crie também uma 
let conta para guardar o valor total.

Toda vez que a resposta for sim, o laço deve se repetir, e devemos 
adicionar R$2.50 ao valor total. Quando a resposta não for sim, 
devemos imprimir o valor total da conta. */

// está em loop

// let comerCoxinhas = prompt("Deseja comer mais coxinhas? responda 'S' para 'sim' ou 'N' para 'não'")
// let totalDaConta = 0

// while (comerCoxinhas === "S") {
//         console.log("Deseja comer mais coxinhas? responda 'S' para 'sim' ou 'N' para 'não'");
//         totalDaConta = totalDaConta + comerCoxinhas
//         console.log(`Total da conta ${totalDaConta}`)
// }
// console.log("Fim da conta");

function coxinhas(){
  let resultado = 0
  let soma = 2.5
  let enquanto = prompt(`Deseja comer mais coxinhas? `)
  while(enquanto.toLowerCase() === "S" || enquanto.toLowerCase() === "s"){
    resultado +=soma
    enquanto = prompt(`Deseja comer mais coxinhas? `)
  }
  console.log(`O valor total da conta foi de ${resultado} reais`);
}
coxinhas()