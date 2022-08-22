//Array de objetos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 =['Agosto','Septiembre'];
const meses3 =['Octubre','Noviembre'];
// .concat
const resultado = meses.concat(meses2,meses3, "Otro Mes");
console.log(resultado);


//spread operator
//El orden es importante , se unen dependiendo la forma en la que se declara 
//Eje ...meses 2 + ....meses , se visualiza primero las variables de meses2 y luego las de meses
const resultado2 = [...meses,...meses2,...meses3,];
console.log(resultado2);






