const carrito = [
    { nombre:'Monitor 25 pulgadas', precio: 500},
    { nombre:'Tablet 12 pulgadas', precio: 300},
    { nombre:'Celular 17 pulgadas', precio: 200},
    { nombre:'Mesa ', precio: 100},
    { nombre:'Silla', precio: 150},
    { nombre:'Monitor 19 pulgadas', precio: 400},
    
]


//FORLOOP
/*for(let i = 0 ; i< carrito.length ; i++){
    console.log(carrito[i]);
}

//Iterar un Array para mostrar los elementos 
for(let i = 0 ; i< carrito.length ; i++){
    console.log(carrito[i].nombre);
}*/

for(let i = 0 ; i< carrito.length ; i++){
    console.log(`Nombre ${carrito[i].nombre}  - Precio : ${carrito[i].precio}`);
}



carrito.forEach( function (producto){
    console.log(`Nombre ${producto.nombre}  - Precio : ${producto.precio}`);
});