//ASIGNACION DE VARIABLE A CARRITO
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
//ASIGACION DE VARIABLE LSITA CURSOS
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners(){
    //Cuando agregas un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click',agregarCurso)


    carrito.addEventListener('click', eliminarCurso);


    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        carritoHTML();
    })
}



//Funciones
function agregarCurso (e) {
    //Prevenir que vaya al ID y vaya hacia arriba
    e.preventDefault();
    //validar que el input que se cliclkea sea 'agregar Carrito' 
    if( e.target.classList.contains('agregar-carrito') ){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado);
    }
 
}

function eliminarCurso(e){
  
   if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => {
            if(curso.id === cursoId){
                if(curso.cantidad > 1){
                    curso.cantidad--;
                    return curso;
                }else{
                    delete curso;
                }
            }else{
                return curso;
            }
        });

        carritoHTML();//itererar sobre el carrito y mostrar su HTML
   } 
   
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    //crear un obtjeto con el contenido del curso actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }
    //Revisa si el elemtno ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        const cursos  = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            }else{
                return curso; //retorna los objetos que no son los duplicados
            }
        })
        articulosCarrito = [...cursos];
    }else{
    //agrega elementos al array de carritos - se agrega artituloCarritos para no perder la referencia del art anterior
        articulosCarrito = [...articulosCarrito,infoCurso];
    }

    carritoHTML();
}


//Muestra el carrito de compras en el html

function carritoHTML(){
    //Limpiar el HTML
    limpiarHTML();
    //RECORRE EL CARRITO Y GENERA EL HTML
    articulosCarrito.forEach( curso =>{
        const {imagen,titulo,precio,cantidad , id} = curso;
        const row  = document.createElement('tr');
        row.innerHTML = ` 
         <td>
         <img src="${imagen}" width=100">
         </td>
         <th>${titulo}</td>
         <td>${precio}</td>
         <td>${cantidad}</td>
         <td>
            <a href="#" class="borrar-curso"  data-id="${id}"> X </a> 
         </td>
         `;
         //agrega el html del carrito en el tbody
         contenedorCarrito.appendChild(row);
    })
}


// Eliminar los cursos del tbody
function limpiarHTML(){
    //Forma lenta 
    //contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}


