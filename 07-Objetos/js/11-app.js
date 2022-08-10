//Palabra THIS.

const nombre = "hola";
const precio = 20;

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio:300,
    disponible: true,
    mostrarInfo : function(){
        console.log(`El producto: ${nombre}tiene un precio de:${precio} `)
    },
    mostrarDatos : function(){
        console.log(`El producto: ${this.nombre}tiene un precio de:${this.precio} `)
    }
}

//no lee los datos de los objetos 
producto.mostrarInfo();

//Por eso se realiza el this para indicar que es referenciado a los atributos del mismo objeto
producto.mostrarDatos();
