
//Array de objetos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//es tomar una cnatidad de datos y unirlos y entrgar un resultado
// con un foreach

let total = 0;
carrito.forEach(producto  => total += producto.precio );
console.log(total);

//con un reduce  2 se lapasan 2 argumentos  , el valor anterior con el valor actual 
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);
