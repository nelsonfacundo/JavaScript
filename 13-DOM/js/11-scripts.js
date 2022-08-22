const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');


//EVENTOS 
//Primer argumento que le pasamos es el evento por el cual vamos a esperar 
//Segundo argumento 

//Con funcion anonima
/*
btnFlotante.addEventListener('click',() => {
    console.log('diste click en el boton');
});*/

btnFlotante.addEventListener('click',mostrarOcultarFooter)


function mostrarOcultarFooter(){    
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        //btnFlotante.classList.remove('activo') 
        this.classList.remove('activo')  // se puede utilziar this ya que el btnFlotante es quien se le hace referencia
        this.textContent = 'Idioma y Monedas';
    }else{
        footer.classList.add('activo');
        //btnFlotante.classList.add('activo')
        this.classList.add('activo') // se puede utilziar this ya que el btnFlotante es quien se le hace referencia
        this.textContent ='Click para cerrar'
    }
}