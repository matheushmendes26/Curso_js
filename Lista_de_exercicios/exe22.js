const ValorAnuidade = function(mês, anuidade){
    let valor = anuidade*((1+0.05)**mês)

    console.log("Valor a pagar será de: ", valor.toFixed(2), "reais")
}

ValorAnuidade(7,180)