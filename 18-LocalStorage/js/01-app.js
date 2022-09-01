// key - Value  // solamente se puede almacenar Strings 
localStorage.setItem('nombre','Juan');

//Session storage si cierro sesion se elimina los datos 
sessionStorage.setItem('nombre','Facundo')

const producto = {
    nombre : "Mominito 24 pulgadas",
    precio : 300
}

//Pero se puede convertir un objeto a String  para poder almacenarlo en el local storage
const productoString = JSON.stringify(producto);
localStorage.setItem('Producto',productoString);

const meses = ['enero','febrero','marzo'];
localStorage.setItem('meses', JSON.stringify( meses ));


