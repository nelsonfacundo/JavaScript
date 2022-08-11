//Los arreglos se pueden modificar 
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'];

//Los valores se pueden modificar  en  arrays 
meses[0] = 'Nuevos mes';
meses[7] = 'Ultimo mes';
//Se saltea  las otras posiciones en JS  , en otros lenguajes puede llenar las posiciones no creadas 
meses[10] = 'Mes en otra posicion';
console.table(meses);



