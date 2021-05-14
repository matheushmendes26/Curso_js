const somarNumeros = function(array){
    let soma  = 0
    for(let i = 0;i<array.length;i++){

        soma = soma + array[i]

    }
    return soma
}

console.log(somarNumeros([1,3,8,4,99,84,3]))