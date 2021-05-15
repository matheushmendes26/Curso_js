const contarCaracter = function(carac,str){

    let aux = 0
    for(let i = 0;i <str.length;i++){
        if(str[i] == carac){
            aux = aux + 1
        }
    }

    return aux
}

console.log(contarCaracter("r","A sorte favorece os audazes!"))
