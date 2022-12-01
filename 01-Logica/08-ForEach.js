var a = ['Uener', 'Catia', 'Davi', 'Leonardo'];

for(var i =0; i < a.length; i++){
  console.log(a[i]);
}

a.forEach(function(value, index){
  console.log(index, value, 'Com forEach.')
});