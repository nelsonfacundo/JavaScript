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


meses.forEach( (mes,i) => {
    if(mes === 'Abril'){
        console.log(`Se encontro en el indice ${i}`);
    }
})

//Solo encuentra el primer valor que contenga el parametro en la busqueda
//Devuelve el indice , en caso de no encontrar el indice devuelve -1
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice); // Posicion 3 
const indice2 = meses.findIndex( mes => mes === 'Diciembre');
console.log(indice2); // -1 



//FindIndex en array de objetos
const index = carrito.findIndex( producto =>  producto.nombre === 'Celular') ;
console.log(index);
const index2 = carrito.findIndex( producto =>  producto.nombre === 'asd') ;
console.log(index2);


