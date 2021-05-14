const receberPriUltimo = function(num){
    let novoarray = []

    for(let i = 0;i<num.length;i++)
    {
        if(i == 0 || i == num.length -1){
            novoarray.push(num[i])
        }
       
    }

    return novoarray
}

console.log(receberPriUltimo([1,"lala",4, 3,7,"tete"]))