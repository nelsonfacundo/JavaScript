//VALIDAR EMAIL 
//Variables
const btnEnviar  = document.querySelector('#enviar'); 
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



eventListeners();
function eventListeners(){
    //cuando la app aranca
    document.addEventListener('DOMContentLoaded',iniciarApp)
    //campos del formulario 
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);

    //reinicia el formulario
    btnReset.addEventListener('click',resetearFormulario);

    //Enviar email 
    formulario.addEventListener('submit',enviarEmail);
}

function iniciarApp(){
    
    btnEnviar.disabled = true;
    
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

function validarFormulario(e){
    if(e.target.value.length > 0){
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');
    }else{
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500');
        mostrarError('Todos los camps todos obligatorios');
    }
    
    //Validacion del campo email
    if(e.target.type === 'email'){
   
        
        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
          

             e.target.classList.remove('border','border-red-500');
             e.target.classList.add('border','border-green-500');
        }else{
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');
            mostrarError('Email no valido ');
        }
    }


    if(er.test(email.value) && asunto.value !=='' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
    }

}


function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    //Agrego clase extra para que no se repita el mensaje por cada error en cada input 
    mensajeError.classList.add('border','border-red-500','backgroundo-red-100','text-red-500','p-3','mt-5','text-center','error');

    //.lengh solo existe en querySelectoAll  -> nos retorna una coleccion 
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0 ){
        formulario.appendChild(mensajeError);
    }
   
}



//Enviar el email
function enviarEmail(e){
    e.preventDefault();

    //mostrar spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display  = 'flex';

    //despues de 3 segundos ocultar el spinner y mostrar el mensaje 
    setTimeout( () =>{
        spinner.style.display  = 'none';
        //mensaje que dece que se envio correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Se envio el mensaje correctamente';
        parrafo.classList.add('text-center','my-10','p-3','bg-green-500','text-white','font-bold','uppercase');
        //Seteo el parrafo antes del spinner 
        formulario.insertBefore(parrafo,spinner)

        //Eliminar el mensaje 
        setTimeout( () =>{
            parrafo.remove()
            resetearFormulario(e);
        },4000)
    },3000);

}


function resetearFormulario (e){
    e.preventDefault();
    formulario.reset();
    resetColor();
    iniciarApp();
}


function resetColor (){
    email.classList.remove('border','border-green-500');
    asunto.classList.remove('border','border-green-500');
    mensaje.classList.remove('border','border-green-500');
}
