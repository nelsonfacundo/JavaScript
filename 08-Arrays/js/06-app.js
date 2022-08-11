const carrito = [];


const producto = {
    nombre: 'Monitor',
    precio : 300
}
const producto2 = {
    nombre: 'Celular',
    precio :800
}
const producto3 = {
    nombre: 'Teclado',
    precio :50
}

//nuevas versiones diferentes que hacen los mismos , se las conocen como formas declarativas y otras como imperativa
//Imperativo  modifica la variable inicial que trabaja sobre ella  

//Funcion declarativa forma es un paradigma que expresa la logina sin describir el flujo de control 
let resultado ;
resultado = [...carrito,producto];
resultado = [...resultado,producto2];
//resultado = [...producto3,resultado];
console.table(resultado);
console.table(carrito);