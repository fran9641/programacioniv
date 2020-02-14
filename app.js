document.addEventListener("DOMContentLoaded", (event) =>{
    const formAlumnos = document.querySelector("#frmAlumnos");
    formAlumnos.addEventListener("submit", (e)=>{
        e.preventDefault(); 
        let codigo = document.querySelector("#txtCodigoAlumno").value,
            nombre = document.querySelector("#txtNombreAlumno").value,
            direccion = document.querySelector("#txtDireccionAlumno").value,
            telefono = document.querySelector("#txtTelefonoAlumno").value;

            var keycodigo="Codigo"+" ";
            var keynombre="Nombre"+" ";
            var keydireccion="Direccion"+" ";
            var keytelefono="Telefono"+" ";


        if( 'localStorage' in window ){
            window.localStorage.setItem(keycodigo, codigo);
            window.localStorage.setItem(keynombre, nombre);
            window.localStorage.setItem(keydireccion, direccion);
            window.localStorage.setItem(keytelefono, telefono);
            

        } else {
            alert("almacenamiento en local NO soportado!!! Actualizate!");
        }
        console.log(codigo,nombre,direccion,telefono);
        
    });
    document.querySelector("#btnRecuperarAlumno").addEventListener("click",(e)=>{
        if( 'localStorage' in window ){
            document.querySelector("#txtCodigoAlumno").value = 
                window.localStorage.getItem("codigo");
            document.querySelector("#txtNombreAlumno").value = 
                window.localStorage.getItem("nombre");
            document.querySelector("#txtDireccionAlumno").value = 
                window.localStorage.getItem("direccion");
            document.querySelector("#txtTelefonoAlumno").value = 
                window.localStorage.getItem("telefono");
        }  else {
            alert("almacenamiento en local NO soportado!!! Actualizate!");
        }
    });
});




/*document.addEventListener("DOMContentLoaded",function(e){
    alert("Tarea Freddy Castro");
});
/*document.addEventListener("DOMContentLoaded",init);
function init(e){
    alert("Listo")
}*/