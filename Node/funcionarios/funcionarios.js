const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response =>{
    const funcionarios = response.data

    const verificagenero = ver => ver.genero == 'F'
    const verificapais = verifica => verifica.pais == 'China'
    const menorsalario = (func,funcatual) => {
        return func.salario < funcatual.salario ? func : funcatual
    }
    const resultado = funcionarios.filter(verificagenero).filter(verificapais).reduce(menorsalario)
    console.log(resultado)
})


