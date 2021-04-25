const crescimento = function(alt1,alt2,tax1,tax2){
    let i = 0
    if(alt1>alt2){
        while(alt1!=alt2){
            alt2 = alt2 + alt2*tax2
            i++
        }

    }else{
        while(alt1!=alt2){
            alt1 = alt1+tax1*alt1
        }

    }
}