//GENERAR HTML DESDE JAVASCRIPT

const enlace = document.createElement('a');
//agreggando texto
enlace.textContent = 'Nuevo enlace';
//agregandole Href
enlace.href = '/nuevo-enlace'

console.log(enlace);

//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');

//Agregar en nuevo enlace al navegador
navegacion.appendChild(enlace); // lo agrega al final de todos los hijos
console.log(navegacion.children);
navegacion.insertBefore(enlace , navegacion.children[1])//Insertar el nuevo elemento pasando el nodo de referencia (segundo argumento)


//Crear un card de forma dinamica
const parrafo1 = document.createElement('p'); ///creo el elemento de tipo 'p'
parrafo1.textContent = 'Concierto'  // agrego el texto al elemento 
parrafo1.classList.add('categoria','Concierto');// agrego el atributo clase


const parrafo2 = document.createElement('p'); ///creo el elemento de tipo 'p'
parrafo2.textContent = 'Concierto de rock de rock'   // agrego el texto al elemento 
parrafo2.classList.add('titulo'); // agrego el atributo clase


const parrafo3 = document.createElement('p'); //creo el elemento de tipo 'p'
parrafo3.textContent = '$800 por persona' // agrego el texto al elemento 
parrafo3.classList.add('precio');// agrego el atributo clase

//CREACION DE DIV INFO
const info = document.createElement('div'); //creo el elemento de tipo 'div/
info.classList.add('info'); // agrego el  atributo clase 'info"

//Agregar  parrafos al div INFO
info.appendChild(parrafo1); // 
info.appendChild(parrafo2);
info.appendChild(parrafo3);


console.log(info);

//CREAR LA IMAGEN
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//Crear div 
const card = document.createElement('div');
card.classList.add('card');

//agregar imagen a la card
card.appendChild(imagen);

//Agregar info a la card
card.appendChild(info);

console.log(card);

//buscar contenedor para setear la imagen en el html
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card);

console.log(contenedor);

