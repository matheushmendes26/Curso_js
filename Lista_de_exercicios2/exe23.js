const contarPalavras = function(str){

    let aux = 0
    for(let i = 0;i <str.length;i++){
        if(str[i] == " "){
            aux = aux + 1
        }
    }

    return aux +1
}

console.log(contarPalavras("Me divirto aprendendo a programar"))