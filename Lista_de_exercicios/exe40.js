const Notas = function(vet){
    for(let i = 0;i<vet.length;i++){
        if(vet[i]>=0&&vet[i]<5.0){
            console.log("Conceito: D")

        }else if(vet[i]<7.0){
            console.log("Conceito: C")

        }else if(vet[i]<8.0){
            console.log("Conceito: B")

        }else{
            console.log("Conceito: A")
        }
    }
}

vetor = [4,5,6,3,2,6,4,7,10]
Notas(vetor)
