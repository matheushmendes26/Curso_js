const repetir = function(param1,param2){
    let array = []
    for(let i = 0;i <param2;i++){
        array[i] = param1
    }

    return array
}

console.log(repetir('código',2))