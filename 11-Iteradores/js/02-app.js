//Break cortar la ejecucion de un forloop
for(let i = 0 ; i <= 10 ; i++ ){
    if(i === 5){
        console.log('Este es el : '+ i );
        break; // llegando a 5 se corta la ejecucion y queda hasta el 5 
    }
    console.log('Numero: '+ i );
}

console.log('\n') ;
//continue interceptar un elemento identificarlo y continuar la ejecucion
for(let i = 0 ; i <= 10 ; i++ ){
    if(i === 5){
        console.log('CINCO');
        continue; // Continua con la ejecucion pero no repite el mismo valor 
    }
    console.log('Numero: '+ i );
}
console.log('\n') ;

const carrito = [
    { nombre:'Monitor 25 pulgadas', precio: 500},
    { nombre:'Tablet 12 pulgadas', precio: 300},
    { nombre:'Celular 17 pulgadas', precio: 200},
    { nombre:'Mesa ', precio: 100},
    { nombre:'Silla', precio: 150},
    { nombre:'Television', precio: 400 , descuento : true},
    
]

for(let i = 0 ; i < carrito.length ; i++){
    if(carrito[i].descuento){   
        console.log(`El articulo ${carrito[i].nombre} tiene descuento` )
    }
    console.log(carrito[i].nombre);
}