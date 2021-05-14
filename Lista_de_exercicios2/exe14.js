const lala = {
    1: 'A',
    2: 'B',
    3: 'C'
}
const objetoParaArray = function(num){
    let newArray = []
    Object.keys(num).forEach(function(item){
       
        newArray.push([item,num[item]])
    })  

    return newArray
}

console.log(objetoParaArray(lala))