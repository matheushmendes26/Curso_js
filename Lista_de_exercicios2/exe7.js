const estaEntre = function(num,max,min,inclusivo){
    if(inclusivo!=null && inclusivo == true){
        if(num>= min && num<= max){
            console.log(true)
        }else{
            console.log(false)
        }

    }else{
        if(num> min && num < max){
            console.log(true)
        }else{
            console.log(false)
        }
    }

}

estaEntre(5,50,5,true)