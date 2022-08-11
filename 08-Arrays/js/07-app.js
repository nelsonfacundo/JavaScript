const carrito = [];


const producto = {
    nombre: 'Monitor',
    precio : 300
}
const producto2 = {
    nombre: 'Celular',
    precio :800
}

//Agregar elemento a un array
carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: 'Teclado',
    precio :50
}


const producto4 = {
    nombre: 'tablet',
    precio :50
}

carrito.unshift(producto3); // lo Agrega al principio  
carrito.push(producto4);


//Eliminar ultimo elemento de un Array
carrito.pop(); // elimino Monitor


//Eliminar del inicio del arreglo
carrito.shift(); // Elimino el teclado 


carrito.splice(0,1) // (Posicion , cuantos elementos queres eliminar )


console.table(carrito);