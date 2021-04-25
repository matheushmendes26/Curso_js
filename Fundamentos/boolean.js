let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-3)
console.log(!!' ')
console.log(!!{ })
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos')
console.log(!!{})
console.log(!!'')
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Finalizando')
console.log(!!(''||null||0||" "))

let nome = ''
console.log(nome||'Desconhecido')