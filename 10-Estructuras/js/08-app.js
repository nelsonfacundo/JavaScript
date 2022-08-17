//Logica condicional
//Una vez validado  el IF termina la secuencia 

const autenticado = true;

if(autenticado){
    console.log('Usuario esta autenticado')
}


const puntaje = 500;

if(puntaje > 300){
    console.log('Bueen puntaje .felicidades')  // VALIDA PRIMERO ESE IF y luego termina la secuencia 
}else if(puntaje > 400){
    console.log('Excelente')
}

//Con una funcion y con return puedo  validar distintos escenarios 
function revisarpuntaje(){
     if(puntaje > 400){
        console.log('Excelente');
        return;
    }
    if(puntaje > 300){
        console.log('Bueen puntaje .felicidades') ; 
        return;
    }
}

revisarpuntaje();