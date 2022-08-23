const nav = document.querySelector('.navegacion');

//Registrar  un evento

//click
//mousedown 
//mouseenter
//mouseup- cuando sueltas el mouse 
//dblclick  - doble click

nav.addEventListener('mouseenter', () =>{
    console.log('Entrando en la navegacion');

    nav.style.backgroundColor = 'white';
});


nav.addEventListener('mouseout', () =>{
    console.log('saliendo en la navegacion');
    nav.style.backgroundColor = 'transparent';
});


