var agora = new Date()
var diaSem = agora.getDay()
/* Para o JavaScript essa função representa os dias da semana pelos números seguintes, veja: 
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/
switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    default:
        console.log('ERRRROL! Esse dia num existe!')
        break
} 
// O "switch" serve para testar casos pontuais!
//O comano "break" é sempre necessário para que o "switch" funcione corretamente e execute somente o caso desejado.