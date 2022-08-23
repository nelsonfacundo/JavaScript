const cardDiv = document.querySelector('.card');


//DELEGACION ATRAVEZ DE UN EVEN PARA DETENER EL BUBLLIGN
cardDiv.addEventListener('click', (e) =>{
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo');
    }
    if(e.target.classList.contains('info')){
        console.log('Diste click en info');
    }
    if(e.target.classList.contains('precio')){
        console.log('Diste click en precio');
    }
})



