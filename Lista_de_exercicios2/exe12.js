const removerPropriedade = function(objeto, nomePropriedade){
    const copia = {...objeto}
    delete copia[nomePropriedade]

    return copia
}