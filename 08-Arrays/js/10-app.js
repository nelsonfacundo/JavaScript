const carrito = [
    { nombre:'Monitor 25 pulgadas', precio: 500},
    { nombre:'Tablet 12 pulgadas', precio: 300},
    { nombre:'Celular 17 pulgadas', precio: 200},
    { nombre:'Mesa ', precio: 100},
    { nombre:'Silla', precio: 150},
    { nombre:'Monitor 19 pulgadas', precio: 400},
    
]


//DIFERENCIA ENTRE MAP Y FOREARCH 
//.MAP CREA UN ARREGLO NUEVO 




//Foreach with return  / UNDEFINED 
const nuevoArreglo2 = carrito.forEach( function (producto){
    return `Nombre ${producto.nombre}  - Precio : ${producto.precio}`;
});


const nuevoArreglo3 = carrito.map( function (producto){
    return `Nombre ${producto.nombre}  - Precio : ${producto.precio}`;
});



console.log(nuevoArreglo2);
console.log(nuevoArreglo3);