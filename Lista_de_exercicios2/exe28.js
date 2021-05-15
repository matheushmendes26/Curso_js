const filtrarPorQdtDeDigitos = function(array,num){

    let newArray = []
    for(let i =0; i<array.length;i++){
        if(array[i]/Math.pow(10,num) < 1 && array[i]>=Math.pow(10,num-1)){
            newArray.push(array[i])
        }
    }

    return newArray

}

console.log(filtrarPorQdtDeDigitos([5,90998,198,1250,11],4))