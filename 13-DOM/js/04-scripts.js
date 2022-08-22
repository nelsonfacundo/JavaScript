//QuerySelector te retorna solamente 1 elemento

const card = document.querySelector('.card');
console.log(card);




// Podemos tener seelectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);


//Seleccionar el segundo card de Hospedaje
const segundoCard =  document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);



//SELECIONAR UN ID  , SE UTILIZA  " # " PARA LAS CLASS ES " . " 
const formulario = document.querySelector('#formulario');
console.log(formulario);

//Se puede mezclar una CLASS + ID  


//SELECCIONAR ELEMENTOS HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);

