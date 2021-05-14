const maiorOuIgual  = function(num1,num2){
    if((typeof(num1) && typeof(num2) != typeof(''))&&(num1>=num2))
    {
        return true
    }else{
        return false
    }
}
            
console.log(maiorOuIgual(5,0))