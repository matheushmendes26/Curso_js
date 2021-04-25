const TROCO = function(quantia)
{
    let aux  = quantia/100

    if(aux >=1)
    {
        aux = Math.floor(aux)
        console.log(aux,"notas de 100")
        aux = aux*100
        quantia  = quantia - aux
    }
    aux = quantia/50
    if(aux>=1){
        aux = Math.floor(aux)
        console.log(aux,"notas de 50")
        aux = aux*50
        quantia  = quantia - aux
    }
    aux = quantia/10
    if(aux>=1){
        aux = Math.floor(aux)
        console.log(aux,"notas de 10")
        aux = aux*10
        quantia  = quantia - aux
    }
    aux = quantia/5
    if(aux>=1){
        aux = Math.floor(aux)
        console.log(aux,"notas de 5")
        aux = aux*5
        quantia  = quantia - aux

    }
    aux = quantia/1
    if(aux>=1){
            aux = Math.floor(aux)
            console.log(aux,"notas de 1")
            aux = aux*1
            quantia  = quantia - aux
            }
}

TROCO(55858)
