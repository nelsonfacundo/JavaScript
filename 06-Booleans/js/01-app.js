//Tipo de datos boolean true o false 

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";
const boolean4 = new Boolean(true)


console.log(boolean1);
console.log(boolean2);
console.log(boolean3);
console.log(boolean4);



console.log(boolean1 == boolean3); // false
console.log(boolean1 === boolean3); // false

console.log(typeof boolean1); //->> boolean
console.log(typeof boolean4);  // ->> Objet