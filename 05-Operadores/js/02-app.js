const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


// Revisar si 2 numeros son iguales 

console.log(numero1 == numero3) //False
console.log(numero1 == numero2) //True  comporador no estricto
console.log(numero1 === numero2) //False  comporador estricto
console.log(numero1 === parseInt(numero2)) //convertir la constante en  numero para comparar 


//Diferentes 

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2) // True Diferentes
console.log(numero1 != numero2) //False  comporador no estricto
console.log(numero1 !== numero2) //True