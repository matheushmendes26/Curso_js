const ReajusteSalario = function(plano,salario)
{
    switch (plano){
        case 'A':
            console.log("Seu novo salário é de ", 1.1*salario)
            break
        case 'B':
            console.log("Seu novo salário é de ", 1.15*salario)
            break
        case 'C':
            console.log("Seu novo salário é de ", 1.2*salario)
            break
        default:
            console.log("Plano inválido!!")
    }
}