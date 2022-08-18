

//ForEach


const pendientes = ['Tarea','Comer','Estudiar','Proyecto']

//dentro del parentesis van los valores del array
pendientes.forEach( (pendiente) => {
    console.log(pendiente)
})

console.log('\n')

pendientes.forEach( (pendiente) => console.log(pendiente))


const carrito = [
    { nombre:'Monitor 25 pulgadas', precio: 500},
    { nombre:'Tablet 12 pulgadas', precio: 300},
    { nombre:'Celular 17 pulgadas', precio: 200},
    { nombre:'Mesa ', precio: 100},
    { nombre:'Silla', precio: 150},
    { nombre:'Monitor 19 pulgadas', precio: 400},
    
]


carrito.forEach( (producto) => console.log(producto.nombre + " "+producto.precio)) 