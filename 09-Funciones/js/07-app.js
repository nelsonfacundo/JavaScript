iniciarApp();

function iniciarApp(){
    console.log('Iniciando App..')

    segundaFuncion();
}


function segundaFuncion(){
    console.log('Desde la segunda funcion')
    usuarioAuntenticado('Facundo');
}


function usuarioAuntenticado(usuario){
    console.log('Autenticando usuario');
    console.log(`Usuario Autenticando exitosamente : ${usuario}`);
}