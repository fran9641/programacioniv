document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmConversores");
    form.addEventListener("submit", event=>{
        event.preventDefault();
  
        let cantidad = document.querySelector("#txtdato").value,
            ocs=document.getElementById("select").value,
            opcion = document.getElementById('cboConvertir');
            cantidad.split(",");

        if(ocs=="media"){
            let lista=cantidad.split(",").map(Number);
            let max=0, val=0,defmod=0;
            var counter={};
            var mode=[];

            for(var i in lista){
                if(!(lista[i] in counter))
                counter[lista[i]]=0;
                counter[lista[i]]++;
                if(counter[lista[i]]==max)
                mode.push(lista[i]);
            }
        }

    });
  });
  
 