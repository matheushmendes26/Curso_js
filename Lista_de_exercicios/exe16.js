const CalcBasic = function(num1,operacao,num2)
{
    switch(operacao){
        case '+':
            console.log("A soma é", num1+num2)
            break
        case'-':
            console.log("A subtração é", num1-num2)
            break
        case '*':
            console.log("O produto é", num1*num2)
            break
        case '/':
            console.log("O resultado da divisão é", num1/num2)
        default:
            console.log("Operação inválida")
    }
}