/* Condições ou condicionais
  -> Utiliza-se para fazer verificações condicionais, do tipo:
    - Se isso for aquilo, faça desta forma, se não, faça daquela forma.
*/

var numero = 10;
var nome = 'Uener';

/* Teste de Condicional
  == Sinal de Igual
  === Sinal de igual e tipo, ou seja é igual ao valor/texto e também igual no tipo, como tipo String, number, boolean, etc
*/
if(nome == 'David'){
  console.log('Verdadeiro!')
}else if(nome == 'Uener'){
  console.log('entramos no else if! verdadeiro.')
}else if(nome != 'Uener' && 'David'){
  console.log('Somente Else')
}else{
  console.log('nenhuma das opções.')
}

/* Teste de Condicional
  >= Maior igual
  <= menor Igual
  > maior
  < menor
  != Diferente (sinais de ! e = juntos)
  !== Diferente no tipo e valor
*/
if(numero <= 10){
  console.log('O número é menor ou igual 10!')
}

if(nome != 'Catia'){
  console.log('Catia é diferente de: '+nome)
}
if(nome !== 'Catia'){
  console.log(`Catia é igual a ${nome} no tipo, por ser um(a) ${typeof(nome)}`)
}

/* Teste de Condicional
  && And (e)
  || Or (ou)
  ! Not (negação)
*/