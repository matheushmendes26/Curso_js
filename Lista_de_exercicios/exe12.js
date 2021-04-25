function fatorial(num){
    let fat = 1
    if(num == 0)
    {
        return 1
    }else{
        while(num>1)
        {
        fat = fat*num
        num--
        }
        return fat
    }
}

console.log(fatorial(5))
console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(3))