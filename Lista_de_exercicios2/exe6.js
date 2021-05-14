const inverso = function(valor){
    if(typeof(valor) == typeof(true)){
        if(valor == true){
            console.log(false)
        }else{
            console.log(true)
        }
    }else{
        if(typeof(valor)== typeof(0)){
            console.log(valor*(-1))
        }else{
            console.log("booleano ou número esperados, mas o parâmetro é do tipo string")
        }
    }
}
inverso(true)

