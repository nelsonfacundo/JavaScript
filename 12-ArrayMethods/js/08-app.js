//Array de indices
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


//Array de objetos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Se modifica el arreglo original
console.log(meses);
meses.push('Agosto');
//Esta forma modifica el arreglo original , se llama progromacion funcional , se trata de no modificar el arreglo original
//rest operator con arreglo de indices
const meses2 = [...meses,'Agosto'];
console.log(meses2);


//Rest operator con arreglos con objetos
const producto = {nombre : 'Disco duro', precio: 300};
const carrito2= [...carrito,producto];
console.log(carrito2);


