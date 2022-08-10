//CUMPLIR CIERTAS REGLAS A LA HORA DE ESCRIBIR CODIGO 
//INVESTIGAR REGLAS 
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio:300,
    disponible: true,
}

//objetos methods
//Prevenir que un objeto no sea modificado 
Object.freeze(producto); // FIGURA ERROR  , no modificar modificar , no eliminar , ni agregar 

//producto.disponible = false;
//producto.imagen = "imagen.jpg"
//delete producto.precio;
console.log(producto);

console.log(Object.isFrozen(producto)); // True or Flase  indicando que el objeto no es modificable o no 



