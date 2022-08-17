const usuario = true;
const puedePagar = false;

//el orden es imporntante
if(usuario && puedePagar){
    console.log("Si es usuario y puede pagar")
}else if(!usuario && !puedePagar){
    console.log("no tiene cuenta  ni puede pagar")
}else if(!usuario){
    console.log("Inicia sesion")
}else if(!puedePagar){
    console.log("No tiene medios de pagos")
}
