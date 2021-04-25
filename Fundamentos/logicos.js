function compras(trab1, trab2){
  const comprarSor = trab1 || trab2
  const compTV50 = trab1 && trab2
  //const compTV32 = !!(trab1 ^ trab2)
  const compTV32 = trab1 != trab2
  const saudavel = !comprarSor
  
  return{ comprarSor, compTV50, compTV32, saudavel}

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
