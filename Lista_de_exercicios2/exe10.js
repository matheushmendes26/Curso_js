const simboloMais = function(num){

    let novoString = ''
    for(let i = 0; i<num;i++)
    {
        novoString = novoString+'+'
    }
    return novoString
}

console.log(simboloMais(5))