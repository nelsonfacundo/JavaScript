//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];


//Event listeners
EventListeners()
function EventListeners(){
    //cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet);
    
    //Actualizacion de DOM
    document.addEventListener('DOMContentLoaded', () =>{
        //Intento buscar a los tweets en el localstorage  ||  = null setea un arreglo vacio 
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    })
}




//Funciones
function agregarTweet(e){
    e.preventDefault();
    //texarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    //validacion
    if(tweet == ''){
        mostrarError('Un mensaje no puede ir vacio');
        return ;
    }
    const tweetObj = {
        id: Date.now(),
        tweet: tweet
    }
    //añadir al arreglo de tweets
    tweets = [...tweets,tweetObj];
  
    crearHTML();
    //reiniciar el formulario
    formulario.reset();
}



function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error
    mensajeError.classList.add('error');
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    //Elimina la alerta depsues de 3 segundos
    setTimeout( () => {
        mensajeError.remove()
    },3000)
}


function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet => {
            //agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet',);
            btnEliminar.innerText = 'X';
           
            //Anadir  la funcion de eliminar 
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }

            //Crear el html
            const li = document.createElement('li');
            //Anadir el texto
            li.innerText = tweet.tweet;
            li.appendChild(btnEliminar);
            //INSTERTARLO EN EL HTML
            listaTweets.appendChild(li)
        })
    }
    sincronizarStorage();
}


///agrega los twets actualies en localstorage
function sincronizarStorage() {
    localStorage.setItem('tweets',JSON.stringify(tweets));
}


//Elimina un tweet
function borrarTweet(id){
    tweets = tweets.filter(tweet => {  return tweet.id !==  id})
    crearHTML();
}


function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}


