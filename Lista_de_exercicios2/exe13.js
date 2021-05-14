filtrarNumeros = function(array){
    let newarray = []
    for(let i =0;i<array.length;i++){
        if(typeof(1)==typeof(array[i]))
        newarray.push(array[i])

    }

    return newarray
}

console.log(filtrarNumeros([1,2,"3",true,4]))
