/*

==> O código atribui cada 'id', que representa uma 'tag', a uma variável. Isso liga os elementos HTML à linguagem JavaScript;
==> Testa os dados com 'if'. Se houver erro, ele é apontado, caso contrário segue;
==> No 'else' determina os tipos de dados;
==> Implementa outra condição 'if' para testar a validade do 'passo', que não pode ser 0, nem negativo.
==> Segue com mais um 'if' tendo uma estruturas de controle 'for' aninhada para contagem crescente, e outra para contagem regressiva aninhada no 'else';
==> Finaliza com o emoji 'Flag".

*/
function contar() {
    let start = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
// O 'if' faz o teste de validação dos dados.
    if (start.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(start.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido. Será considerado Passo = 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}  \u{1F449}  `
            } 
        }else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c}  \u{1F449}  ` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
} 
/* 'unicode meoji list' para acesso à lista dos códigos dos emojis. 
    A declaração em JavaScript é '\u{1F913}' <-Esse é o código do nerdola.
    Esses códigos só funcionam entre crases!
*/    
    