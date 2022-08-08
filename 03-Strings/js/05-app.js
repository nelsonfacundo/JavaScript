const producto = "Monitor 20 pulgadas";



console.log(producto);

//Reemplzar una palabra por otra   methor .replace()
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Pulgadas','"')); // -> no lo encuentra si es diferente por mayuscula o viceversa 
//console.log(producto.replace("Pulgadas"," " ")); // ->  Error 
console.log(producto.replace("pulgadas","''")); // ->  OK
console.log(producto.replace('Monitor','Monitor Curvo')); // ->  OK


//Cortar string .slice()
console.log(producto.slice(0,10)); // ->  OK
console.log(producto.slice(2,1)); // ->  NADA
console.log(producto.slice(8,)); // ->  OK


//Alternativa a slice  string .substring()
console.log(producto.substring(0,10)); // ->  OK
console.log(producto.substring(2,1)); // ->  Corta del 2 al 1 
console.log(producto.substring(8,)); // ->  OK


//OBTENER  UN CARACTER EXAMPLE ICONO CON INICIAL  DE USUARIO 
const usuario = 'Facundo';
console.log(usuario.substring(0,1)); // ->   Obtiene el string la posicion 0 al 1
console.log(usuario.charAt(0)); // ->  Obtiene el string la posicion 0

