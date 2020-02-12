/* 
document.addEventListener("DOMContentLoaded", init);

function init(e){
    alert("LISTO")
}*/

/*
document.addEventListener("DOMContentLoaded", function(e){
    alert("CALLBACK LISTO");
});*/

document.addEventListener("DOMContentLoaded", e=>{
    document.querySelector("#frmAlumnos").addEventListener("submit", event=>{
        event.preventDefault();

        let codigo=document.querySelector("#txtCodigoAlumno").value,
            nombre=document.querySelector("#txtNombreAlmuno").value,
            direccion=document.querySelector("#txtDireccionAlumno").value,
            telefono=document.querySelector("#txtTelefonoAlumno").value;

        if('localStorage' in window){
            window.localStorage.setItem("codigo", codigo);
            window.localStorage.setItem("nombre", nombre);
            window.localStorage.setItem("direccion", direccion);
            window.localStorage.setItem("telefono", telefono);
        }else{
            alert("Por favor Actualizate!!!")
        }
    });
    document.querySelector("#btnRecuperarAlumno")
});