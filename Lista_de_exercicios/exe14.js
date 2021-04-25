const qualeaFruta = function(fruta){

    switch (fruta){
        case 'maçã':
            console.log("Não vendemos essa fruta aqui")
            break
        case 'banana':
            console.log("Estamos com escassez de bananas")
            break
        case 'melancia':
            console.log("Aqui está, 3 reais o quilo")
            break
        default:
            console.log("Erro!!!")
    }
}
qualeaFruta('maçã')
qualeaFruta('melancia')
qualeaFruta('banana')
qualeaFruta('roupa')