
//CREAR OBJETO DENTRO DE OTRO OBJETO
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio:300,
    disponible: true,
    informacion :{
        medidas :{
            peso : '1kg',
            medida : '1m'
        }, // importante coma para dividir entre distintos objetos 
        fabricacion:{
            pais:'China'
        }
    }
}


console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.fabricacion.pais);