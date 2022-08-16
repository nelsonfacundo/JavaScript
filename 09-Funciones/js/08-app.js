//funciones que retornan valores

function sumar(a,b){
    console.log(a + b);
}
sumar(30,30);



//Funcion que retorna un valor 
function sumar2(a,b){
    return a + b;
}
const resultado = sumar2(20,30);
console.log(resultado);


//Ejemplo avanzado

let total = 0;

function agregarCarrito(Precio){
    return total += Precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

agregarCarrito(300);
agregarCarrito(300);
agregarCarrito(400);
const totalPagar  = calcularImpuesto(total);

console.log(total);
console.log(totalPagar);