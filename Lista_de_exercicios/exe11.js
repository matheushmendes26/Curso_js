function calculabissexto(ano){
    if(ano%4==0){
        if(ano%100!=0)
        {
            if(ano%400==0){
                return true
            }
        }
    }else{
        return false
    }
}

console.log(calculabissexto(1996))
console.log(calculabissexto(1976))
console.log(calculabissexto(2000))
console.log(calculabissexto(2017))
console.log(calculabissexto(2220))
console.log(calculabissexto(2068))