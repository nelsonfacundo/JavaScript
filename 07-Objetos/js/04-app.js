const producto = {
    nombre: "Monitor 20 pulgadas",
    precio:300,
    disponible: true,
}

console.log(producto.nombre);


//ASIGNACION A UNA VARIABLE DE UNA PROPIEDAD DE UN OBJETO
//const nombre = producto.nombre;
//console.log(nombre);


//Destructuring
const {nombre , precio , disponible , noExiste}  = producto;
//const {precio} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste); // undefined 
