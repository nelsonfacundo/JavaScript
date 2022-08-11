const meses = ['Enero','Febrero','Marzo'];


//Agregar un nuevo mes 
meses[3] = 'Abril'; // conocer la posicion y lo hace no dinamico

//Agregar al final del arreglo sin conocer la extension del Array
meses.push('Abril');
console.table(meses);



//Agregar un objeto a un array 


const carrito = [];

//Definir un producto;

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

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3); // lo Agrega al principio  

console.table(carrito);