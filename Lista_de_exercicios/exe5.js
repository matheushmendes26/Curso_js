function arredonda(A){

    A = A.toFixed(2).toString().replace(".",",")
    console.log("R$", A)
}

arredonda(1.1+2.3)