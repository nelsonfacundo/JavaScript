
//Retorna un NodeList similar un a arreglo pero se lo conoce como nodos en html
const cardsAll = document.querySelectorAll('.card');
console.log(cardsAll);


//SI UN ELEMENTO NO EXISTE retorna un nodo vacio
const noExiste = document.querySelectorAll('No existe');
console.log(noExiste);