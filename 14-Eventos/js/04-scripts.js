const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit',validarFormulario);

function validarFormulario(e){
        e.preventDefault(); // detiene la accion del formulario
    
        console.log("Consultar una api");
    
        console.log(e.target.method); // saber que metodo es 
        console.log(e.target.action); // saber 
}

