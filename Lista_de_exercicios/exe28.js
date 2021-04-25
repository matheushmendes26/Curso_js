const PareseImpares = function(vet){
   let aux = vet.length
   let i = 0
   let j = 0
   let k = 0
   for(i=0;i<aux;i++)
   {
        if(vet[i]%2==0)
        {
            j++
        }else{
            k++
        }
    
   }
   console.log("Existe no vetor",j,"números pares e ", k,"números ímpares")
}
vetor = [1,23,4,4,3,2,4]
PareseImpares(vetor)
