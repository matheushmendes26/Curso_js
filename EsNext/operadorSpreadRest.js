//operador rest(juntar)/spread(espalhar)
//usar rest como parâmetro de uma função


//usar rest como objeto de uma função
const funcionarios = {nome: 'Maria', salario: 12222.33}
const clone = {ativo: true, ...funcionarios}
console.log(clone)

//usar spread com array
const nomes = ['Anna','Beto','Carla']
const colocar = ['Joana','Michele']
const final = ['Pedro', ...colocar,'Julia',...nomes]
console.log(final)