//Scrolls evento global  
//windows para saber la documentcion

/*window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;

    console.log(scrollPX);
});*/

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 100){
        console.log('Evento visible')
    }else{
        console.log('no esta visible')
    }
    

});