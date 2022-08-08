const producto = "Monitor de 20 pulgadas ";
const precio = "30000$ ";

console.log(producto.concat(precio));
console.log(producto.concat('en Descuento'));
console.log(producto +'con un precio de '+ precio);
console.log("El producto " +producto +'con un precio de '+ precio);
console.log("El producto " ,producto ,'con un precio de ', precio);

//TEMPLATE STRING
console.log(`El producto ${producto} tiene un precio de ${precio}`) 