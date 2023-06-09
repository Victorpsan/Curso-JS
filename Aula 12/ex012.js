var idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Com essa idade você ainda não pode votar, mas seja crítico para estar consciente quando a hora chegar!`)
} else {
    if (idade >= 16 && idade < 18 || idade > 65) {
        console.log("Com essa idade seu voto é facultativo. Seja consciente!")
    } else {
        console.log("Com essa idade seu voto é obrigatório. Tenha responabilidade e vote consciente!")
    }

} //"idade >= 16 &&" - não precisa ser declarado!
// A declaração de  