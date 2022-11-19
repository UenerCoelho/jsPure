/* Varáveis no JavaScript
  -> Var = Variável Global
  -> let = Variável no escopo
  -> const = constante
*/

var nome = 'Uener';
nome = 'Catia';

{
  let idade = 38;
  console.log('Variável de Escopo (local): idade = ', idade);
}
console.log('Variável Global: nome = ', nome)

const nomeConst = 'Guilherme';
console.log('Variável Constante: nomeConst = ', nomeConst)

var num = 38;
var person = 'Uener';
var varBoolean = true;

console.log (`
  Variável Numéria = ${num},
  Variável de Texto = ${person}
  Variável Booleana = ${varBoolean}
  `)

  console.log(`Concatenando Variáveis: `)
  console.log('Nome: ' +person+ ' Idade: '+num+' Verdade? '+varBoolean)
