const checarAnoBissexto = function(ano){
    if(ano%4==0 && ano%100!=0){
        console.log(true)
    }else{
        if(ano%400==0 && ano%100==0){
            console.log(true)
        }else{
            console.log(false)
        }
    }
    
}


checarAnoBissexto(2100)