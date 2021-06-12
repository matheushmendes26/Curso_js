const moduloA = require('C:/Users/mathe/OneDrive/Área de Trabalho/Curso_js/Node/moduloA.js')

console.log(moduloA.bemivndo)

const http = require('http')
http.createServer((req,res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)
