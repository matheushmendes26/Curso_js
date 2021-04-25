const NotaFinal = function(codigoAluno,nota1, nota2, nota3)
{
    let media = 0
    if(nota1>nota2&&nota1>nota3)
    {
        media = (nota1*4+nota2*3+nota3*3)/(10)
    }
   if(nota2>nota1&&nota2>nota3)
    {
    media = (nota2*4+nota1*3+nota3*3)/(10)
    }
    if(nota3>nota2&&nota3>nota1)
    {
        media = (nota3*4+nota2*3+nota1*3)/(10)
    }

    if(media<5)
    {
        console.log("REPROVADO")
    }else{
        console.log("APROVADO")
    }
}

NotaFinal(101,4,2,9)
