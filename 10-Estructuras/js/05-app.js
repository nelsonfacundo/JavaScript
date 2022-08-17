//Switch case

const metodoPago = 'efectivo'

switch(metodoPago){
    case 'efectivo':
        pagar(metodoPago);
    break;
    case 'tarjeta debito':
        console.log('Pagaste con tarjeta debito');
    break;
    case 'tarjeta Credito':
        console.log('Pagaste con tarjeta credito');
    break;
    default:
        console.log('No seleccionaste ningun medio de pago');
        break;
}

function pagar(metodo){
    console.log(`pagando  con ${metodo} `)
}

