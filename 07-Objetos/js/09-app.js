const producto = {
    nombre: "Monitor 20 pulgadas",
    precio:300,
    disponible: true,
}


//SELLAR UN OBJETO no se puede agregar , ni eliminar pero si modificar las propiedades existentes
Object.seal( producto );
producto.disponible = false;
producto.imagen = 'imagen.jpg'; // no realiza ninguna accion al agregar una nueva propiedad 
delete producto.nombre; // no realiza ninguna accion al eliminar una propiedad 
console.log(producto);


//SABER SI UN OBJETO ESTA SELLADO 
console.log(Object.isSealed( producto ))