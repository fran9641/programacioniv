document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmConversores");
    form.addEventListener("submit", event=>{
        event.preventDefault();
  
        let cantidad = document.querySelector("#txtCantidadConversor").value,
            ocs=document.getElementById("select").value,
            opcion = document.getElementById('cboConvertir');
            cantidad.split(",");

        if(ocs=="media"){
            
        }

    });
  });
  
 