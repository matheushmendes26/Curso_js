const TrocaVetor = function(vet1,vet2){
    for(let i = 0;i<vet1.length;i++){
        vet1[i] = vet1[i] + vet2[i]
        vet2[i] = vet1[i] - vet2[i]
        vet1[i] = vet1[i] - vet2[i]
    }
}

vetor1 = [1,2,3,4,5]
vetor2 = [6,7,8,9,10]
TrocaVetor(vetor1,vetor2)

console.log(vetor1)
console.log(vetor2)