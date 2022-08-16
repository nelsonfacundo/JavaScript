const reproductor = {
    cancion : '',
    reproducir : id => { console.log(`Reproduciendo cancion ${id}`)},
    pausar : () =>{  console.log(`Pausando`);},
    borrar : id =>{ console.log(`borrando cancion ${id}`);},
    crearPlayList : nombre => { console.log(`Creando PlayList ${nombre}`);},
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Agregando ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}



reproductor.nuevaCancion = "asdasd"
reproductor.obtenerCancion;






