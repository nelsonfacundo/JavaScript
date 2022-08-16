const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion ${id}`)
    },
    pausar : function(){
        console.log(`Pausando`)
    }
}


reproductor.reproducir(30);
reproductor.reproducir(21);
reproductor.pausar();


//Agregar un metodo de propiedad  a un objeto
reproductor.borrar = function(id){
    console.log(`Borrando cancion ${id}`);
}

reproductor.borrar(21);

