const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;

if(dinero >= totalAPagar){
    console.log("Puedo pagar");
} else if(tarjeta ){
    console.log('Si puedo pagar porque tengo la tarjeta')
} else{
    console.log("No puedo pagar")
}