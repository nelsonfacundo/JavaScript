const busqueda = document.querySelector('.busqueda');



//keyup
//blur
//copy -- copiando
//cut  -- cortando
//input -- realiza los eventos de cut , copy , keydown 


busqueda.addEventListener('input', (event) => {
    if(event.target.value ===''){
        console.log('Fallo la validacion');
    }
   
});

//event.type .. saber que tipo de dato es 
//target.value saber lo que usuario esta escrbiiendo



