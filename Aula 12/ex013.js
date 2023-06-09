var agora = new Date() //Data completa.
var hr = agora.getHours() // Somente a hora.
//Quando em situação real deve-se atentar para a hora de qual dispositivo deve estar orientada a leitura.
console.log(`Agora são ${hr} horas.`)
if (hr < 6) {
    console.log(`É madrugada! Você está bêbado ou  insone?`)
} else if (hr < 12) {
    console.log(`Bom dia!`)
} else if (hr <= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}