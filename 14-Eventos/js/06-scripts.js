//EVENT BUBLLING
//detener el evento bublling con e.stopPropagation();

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click', (e) =>{
    e.stopPropagation();
    console.log('Click card');
})

infoDiv.addEventListener('click', (e) =>{
    e.stopPropagation();
    console.log('Click info');
})

titulo.addEventListener('click', (e) =>{
    e.stopPropagation();
    console.log('Click titulo');
})