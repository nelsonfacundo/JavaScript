//Operador ternario

const autenticado = true;
const puedePagar = false;


console.log( autenticado && puedePagar ? 'Esta autenticado y puede Pagar': 'No esta autenticado y no puede pagar' );
console.log( autenticado  ? puedePagar ? 'Si esta autenticado y puede ' : 'Si autenticado, no puede Pagar ' : 'no no esta autenticado' );

