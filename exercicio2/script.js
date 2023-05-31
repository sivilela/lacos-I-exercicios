/**Exercício 2

Crie um programa que peça um número para o usuário. Com este número, 
o código deve imprimir a tabuada do número, de 1 a 10.

Exemplo com entrada 7:

7
14
21
28
35
42
49
56
63
70 */

let tabuada = Number(prompt("Informe um número e sua tabuada será impressa: "))

for(let i = 1; i <= 10; i++){
  console.log(`${tabuada} * ${i} = ${tabuada*i}`);
}
