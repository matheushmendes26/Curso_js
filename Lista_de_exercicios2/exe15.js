const receberSomenteOsParesDeIndicesPares = function(array){
    let newArray = []
    for(let i =0;i<array.length;i++){
        if(i%2==0 && array[i]%2==0){
            newArray.push(array[i])
        }
    }

    return newArray
}


console.log(receberSomenteOsParesDeIndicesPares([10,70,22,43]))