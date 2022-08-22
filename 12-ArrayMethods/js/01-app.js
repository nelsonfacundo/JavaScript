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


//Comproborar si un valor existe en un arreglo

meses.forEach((mes) =>{
    console.log(mes);
})

meses.forEach((mes) =>{
    if(mes === 'Enero'){
        console.log('Si existe');
    }
})


const resultado = meses.includes('Enero') // METODO PARA CONSULTAR SI EXISTE EL VALOR
console.log(resultado); // Devuelve booleano true porque existe


//En un arreglo de objetos se utiliza .some 
const existe = carrito.some( (producto) => {
    return producto.nombre === "Celular"
})
console.log(existe);

// En un arreglo tradicional con .some
const existe2 = meses.some( mes => mes ===  'Febrero');
console.log(existe2);