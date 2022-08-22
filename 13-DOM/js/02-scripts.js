//Seleccionar elementos por su clase

const header = document.getElementsByClassName('header');

console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//si las clases existen mas de 1 vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


//Si  una clase no existe retorna un arreglo vacio
const noExiste = document.getElementsByClassName('No existe');
console.log(noExiste);