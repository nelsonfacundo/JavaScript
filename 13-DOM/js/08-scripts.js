//TRAVERSING IN THE DOOM

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco son considerados como elementos , los saltos de linea 
console.log(navegacion.children); // lista  los elementos reales


console.log(navegacion.children[0]);
console.log(navegacion.children[1]);
console.log(navegacion.children[5]); // Undefined 


console.log(navegacion.nodeName);
console.log(navegacion.nodeType); // Devuelve un value que en la documentacion de devMozilla se puede identificar el tipo de elemento


const card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent);
card.children[1].children[1].textContent = 'nuevo ttitulo';

console.log(card.children[0])
card.children[0].src = 'img/hacer3.jpg'


//TRAVERSING THE HIJO AL PADRE
console.log(card.parentElement.parentElement.parentElement);

console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);


const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);




console.log(navegacion.firstElementChild); // acceder al primer elemento
console.log(navegacion.lastElementChild); // acceder al ultimo elemento