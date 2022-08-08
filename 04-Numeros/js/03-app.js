const numero1 = 30;
const numero2 = 20;

let resultado;

resultado = Math.PI;

//Redondear 
resultado = Math.round(2.8); //Redondea hacia arriba
resultado = Math.round(2.5); //Redondea hacia arriba
resultado = Math.round(2.2); // Redondea hacia abajo 


//Redondear hacia arriba 
resultado = Math.ceil(2.1);


//Redondear hacia abajo
resultado = Math.floor(2.9);

//Raiz cuadrada
resultado = Math.sqrt(4);

//absoluto
resultado = Math.abs(-500);

//Potencia
resultado = Math.pow(2,4);

// Minimo 
resultado = Math.min(2,4,2,15,-5,12);

// Maximo 
resultado = Math.max(2,4,2,15,-5,12);


// Random 
resultado = Math.random();
resultado = Math.floor(Math.random() * 30); //->  random de 0 a 30 

console.log(resultado);