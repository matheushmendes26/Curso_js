const MaiorMenor = function(vet){
    let Maior = vet[0]
    let Menor = vet[0]
    for(let i = 0;i<vet.length;i++)
    {
        if(vet[i]>Maior)
        {
            Maior = vet[i]
        }
        if(vet[i]<Menor)
        {
            Menor = vet[i]
        }
    }
    console.log("Maior número é:",Maior)
    console.log("Menor número é:",Menor)
}

vetor = [-23,33,4,4,643,3,2,3,-100,343]
MaiorMenor(vetor)