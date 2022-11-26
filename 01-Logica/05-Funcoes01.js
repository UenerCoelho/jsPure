(function teste() {
  'use strict';
  console.log('chamando a função teste.')
})();

(function teste2(nome, idade) {
  'use strict';

  nome = 'Uener';
  idade = 38;

  console.log(`
  Chamando a variável nome que é: 
  ${nome} 
  e a idade que é: 
  ${idade}
  `);
})();

function pegarNome(parametro){
  if(parametro == 1)  {
    return 'Uener';
  }else{
    return 'Outro Nome';
  }
}

var nome = pegarNome(12);
console.log(nome)