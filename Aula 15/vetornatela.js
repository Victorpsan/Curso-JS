let valores = [3, 4, 1, 5, 9]
// Forma tradicional de varrer os valores.
/*
for (let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

// Forma nova, mais simples e fácil!
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}