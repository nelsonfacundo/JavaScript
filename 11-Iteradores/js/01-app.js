//se va a ejecturar hasta que se cumpla o se deja de cumplir 


//for loop

for(let i = 0 ; i <= 10 ; i++ ){
    console.log('Numero: '+ i );
}
console.log('\n')
//Iterando de 2 en 2 
for(let x = 0 ; x <= 10 ; x +=2 ){
    console.log('Numero de 2 en 2 : '+ x );
}
console.log('\n')

//Iterando con estructura de control numeros pares 
for(let i = 0 ; i <= 20 ; i++ ){
    if( i%2===0){
        console.log('Numeros Pares: '+ i );
    } else{
        console.log('Numeros impares: '+ i );
    }
}

console.log('\n')

//Array con objetos 
const carrito = [
    { nombre:'Monitor 25 pulgadas', precio: 500},
    { nombre:'Tablet 12 pulgadas', precio: 300},
    { nombre:'Celular 17 pulgadas', precio: 200},
    { nombre:'Mesa ', precio: 100},
    { nombre:'Silla', precio: 150},
    { nombre:'Television', precio: 400},
    
]

//Iterear un array de objetos 
for(let i = 0 ; i < carrito.length ; i++){
    console.log(carrito[i].nombre);
}







