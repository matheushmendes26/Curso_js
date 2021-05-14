const menorNumero = function(array){
    num = array[0]
    for(let i =0; i<array.length;i++){
        if(num>array[i]){
            num = array[i]
        }
    }

    return num

}

console.log(menorNumero([10,5,35,65]))