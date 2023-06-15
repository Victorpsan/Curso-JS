let num = [8, 5, 2, 0]
num[3] = 4
num[4] = 3
num.push(7) //Método interno=> acrescenta valores na última posição do vetor
num.length //ATRIBUTO=> conta número de elemnentos. Aqui não tem '()'.
console.log(`Os elementos do vetor são: ${num};`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort() //Importante a ordem em que se chama esse método, pois somente ordena o que está declarado antes dele.
console.log(`Veja os elementos ordenados ${num}`)
let pos = num.indexOf(4) // Indica em que posição o valor se encontra.
if (pos == -1) {
    console.log(`Esse valor não existe.`)
} else {
    console.log(`Esse valor está na posição ${pos}`)
} // Quando o valor não existe o retorno é '-1'.


