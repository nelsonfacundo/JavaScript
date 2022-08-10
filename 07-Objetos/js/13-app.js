const producto = {
    nombre: "Monitor 20 pulgadas",
    precio:300,
    disponible: true
}

const producto2 ={

}

//Mostrar solamente los nombres de los atributos
console.log(Object.keys( producto ));
console.log(Object.keys( producto2 ));


//Mostrar los valores de los atributos 
console.log(Object.values( producto ));


//Retorna todos los datos en Pares 
console.log(Object.entries( producto ));