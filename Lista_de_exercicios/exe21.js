const PlanodeSaude = function(idadeDoCliente)
{
   if(idadeDoCliente<10){
       console.log("Valor a pagar será de :", 100+80)
   }else if(idadeDoCliente<30)
   {
    console.log("Valor a pagar será de :", 100+50)
   }else if(idadeDoCliente<60){
    console.log("Valor a pagar será de :", 100+95)

   }else{
    console.log("Valor a pagar será de :", 100+130)

   }
}

PlanodeSaude(65)
