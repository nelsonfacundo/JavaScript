const pendientes = ['Tarea','Comer','Estudiar','Proyecto']



//FOR OF ITERA SOBRE ARREGLOS , MIENTRAS QUE FOR IN ITERA SOBRE OBJETOS 

for( let pendiente in pendientes ){
    console.log(pendiente);
}


const automovil = {
    modelo : 'Camaro',
    year : 2022,
    motor : '6.0'
}


for( let auto in automovil ){
    console.log(auto);
}

for(let [llave,valor] of Object.entries(automovil)){
    console.log(llave+ " " +valor);
} 