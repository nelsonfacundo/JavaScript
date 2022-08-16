// parametros por default

//Se pueden agregar parametros en default para  que no figure undefined 
function saludar(nombre , apellido = 'No tiene apellido'){
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Facundo','Nelson');
saludar('Facundo');








