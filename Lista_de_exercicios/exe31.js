const Negativos = function(vet){
    let Neg = 0
    for(let i = 0;i<vet.length;i++)
    {
        if(vet[i]<0)
        {
            Neg++
        }
    }
    console.log("Há", Neg,"números negativos")
}

vetor = [-23,33,4,4,643,3,2,3,-100,343]
Negativos(vetor)