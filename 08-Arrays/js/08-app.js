const producto = {
    nombre: "Monitor 20 pulgadas",
    precio:300,
    disponible: true,
}

console.log(producto.nombre);


//Destructuring
const {nombre , precio , disponible , noExiste}  = producto;
console.log(nombre);



//Destructuring con Arreglos 
const numeros = [10,203,30,40,50];

const [primero , segundo , tercero ] = numeros;
const [ ,  , , cuarto ] = numeros;  //si queremos obtener un valor de una posicion  se utiliza una coma para ocupar 
//espacio hasta llegar al valor correspondiente 
//
const [primero1,segundo2 , ...tercero3] = numeros;  // utilizar restOperetor  el tercero contiene un arreglo con las demas 
//posiciones  , sintaxis muy comun en React


console.log(primero) ; // En arreglos se  puede crear cualquier nombre  
console.log(cuarto) ; 
console.log(tercero3) ; 