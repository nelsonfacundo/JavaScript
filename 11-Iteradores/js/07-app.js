
const pendientes = ['Tarea','Comer','Estudiar','Proyecto']




const carrito = [
    { nombre:'Monitor 25 pulgadas', precio: 500},
    { nombre:'Tablet 12 pulgadas', precio: 300},
    { nombre:'Celular 17 pulgadas', precio: 200},
    { nombre:'Mesa ', precio: 100},
    { nombre:'Silla', precio: 150},
    { nombre:'Monitor 19 pulgadas', precio: 400},
    
]


for( let pendiente of pendientes ){
    console.log(pendiente);
}

console.log('\n')

for( let producto of carrito ){
    console.log(producto.nombre + " " +producto.precio);
}