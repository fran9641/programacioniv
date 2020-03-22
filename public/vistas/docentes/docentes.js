var $ = el => document.querySelector(el),
    frmDocentes = ("#frmDocentes");
frmDocentes.addEventListener("sumit", e=>{
    e.preventDefault();
    e.stopPropogation();
    
    let docentes = {
        accion   : 'nuevo',
        codigo   : $("#txtCodigoDocentes").value,
        nombre   : $("#txtNombreDocentes").value,
        correo   : $("#txtCorreoDocentes").value,
        telefono : $("#txtTelefonoDocentes").value
    };
    fetch(`private/modulos/docentes/procesos.php?proceso=recibirDatos&docente=${JSON.stringify(docentes)}`).then( resp=>resp.json() ).then(resp=>{
        $("#respuestaDocente").innerHTML = `
            <div class="alert alert-success" role="alert">
                ${resp.msg}
            </div>
        `;
    });
});