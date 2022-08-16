//functiones que toman parametros

function sumar(a,b){
    console.log(a + b);
}


sumar(); // NaN
sumar(2,3); //Argumentos , valores reales 
sumar(-3,-3);


function saludar(nombre , apellido){
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Facundo','Nelson');
saludar();
saludar('facundo',) // undefined
saludar(facundo,nelson); // is not defined 
