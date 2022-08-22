const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//every todos los elementos de un arreglo deben de cumplir la condicion para que nos retorneo un true
//Si o si tienen que cumplir todos los elementos la condicion 
const resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado);
const resultado2 = carrito.every(producto => producto.precio > 1000);
console.log(resultado2);
//. Some revisa por algun elemento que cumpla la condicion de todos los elementos