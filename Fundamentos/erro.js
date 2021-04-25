function tratarErro(erro)
{
    //throw new Error('...')
    throw 10
}
function imprimir(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    }catch(e){
        tratarErro(e)
    } finally {
        console.log('FINAL')
    }
    
}
const obj = {nome: 'Roberto'}
imprimir(obj)