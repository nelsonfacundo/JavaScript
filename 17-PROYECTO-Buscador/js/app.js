//Buscador de autos
//Varaibles
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda =  {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}


//Eventos
document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos(autos);

    //LLena las opciones de años 
    llenarSelectYear();
})

//Event listener para los  select de busqueda
marca.addEventListener('change',e=> {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change',e=> {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener('change',e=> {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener('change',e=> {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change',e=> {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener('change',e=> {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change',e=> {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});



//Funciones
function mostrarAutos(autos){
    //Elimina el html previo
 limpiarHtml()

    autos.forEach(auto => {
        const {marca,modelo,year,puertas,transmision,precio,color} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} -
            ${modelo} -
            ${year} -
            ${puertas} Puertas -
            Transmision ${transmision} -
            Precio : $${precio} -
            ${color} 
        `;


        //Insetar en el html
        resultado.appendChild(autoHTML);
    })
}


function limpiarHtml(){
     while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
     }
}

//Generar  los años del select
function llenarSelectYear(){
    for (let i = max ; i  >= min ; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion) // agrega las opciones de año al select
    }
}




//Funcion que filta en base a la busqueda
function filtrarAuto(){
    //Filtrar anio + marca 
    const resultado = autos.filter( filtarMarca ).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtarColor);

    console.log(resultado)
   if(resultado.length ){
        mostrarAutos(resultado); 
   }else{
        noResultado();
   }
}

//Filtrar marca  
function filtarMarca(auto){
    const { marca } = datosBusqueda
    if(marca){
        return auto.marca === marca
    }
    return auto;
}

//Filtrar anio
function filtrarYear(auto){
    const { year } = datosBusqueda
    if(year){
        return auto.year === year
    }
    return auto;
}


function filtrarMinimo(auto){
    const { minimo } = datosBusqueda
    if( minimo ){
        return auto.precio >= minimo
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda
    if( maximo ){
        return auto.precio <= maximo
    }
    return auto;
}

function filtrarPuertas(auto){
    const { puertas } = datosBusqueda
    if( puertas ){
        return auto.puertas === puertas
    }
    return auto;
}

function filtrarTransmision(auto){
    const { transmision } = datosBusqueda
    if( maximo ){
        return auto.transmision === transmision
    }
    return auto;
}

function filtarColor(auto){
    const { color } = datosBusqueda
    if( color ){
        return auto.color === color
    }
    return auto;
}


function noResultado(){
    limpiarHtml();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay resultado ,Intenta buscar con otros terminos de busqueda'
    resultado.appendChild(noResultado)
}