//Uma factory retorna uma nova instância

module.exports = ()=>{
    return {
        valor: 1,
        enc(){
            this.valor++
        }

    }

}