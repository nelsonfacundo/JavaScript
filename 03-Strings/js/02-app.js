const producto = "Monitor de 20 pulgadas ";


console.log(producto);

//Conocer la cantidad de letras de cadenas de textos 
console.log(producto.length);

console.log(producto.indexOf('Monitor')); // -> 0 lo encontro en la cadena 0 
console.log(producto.indexOf('Pulgagas')); // -> 11 lo encontro en la cadena 11 
console.log(producto.indexOf('o')); // -> 11 lo encontro en la cadena 1 
console.log(producto.indexOf('asd')); // -> -1 No encontro la palabra



console.log(producto.includes('Monitor')); // -> True
console.log(producto.includes('monitor')); // ->  false 
console.log(producto.includes('tablet')); // ->  false 