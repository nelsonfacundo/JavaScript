const producto = "             Monitor de 20 pulgadas                ";


console.log(producto);
console.log(producto.length);



//Eliminar  los espacios del inicio
console.log(producto.trimStart() );
//Eliminar  los espacios del final
console.log(producto.trimEnd() );


console.log(producto.trimStart().trimEnd() );

//Eliminar ambos lados
console.log(producto.trim() );