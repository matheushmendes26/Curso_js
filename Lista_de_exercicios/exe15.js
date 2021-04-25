const compraCarro = function(modelo){

    switch (modelo){
        case 'hatch':
            console.log("Compra efetuada com sucesso")
            break
        case 'Sedan':
        case 'Motocicletas':
        case 'Caminhonetes':
            console.log("Tem certeza que não prefere esse modelo?")
            break
        default:
            console.log("Não trabalhamos com esse tipo de automóvel aqui")
    }
}