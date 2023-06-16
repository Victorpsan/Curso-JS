let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res') 
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        let n = Number(num.value)
        valores.push(n)
        let valoradd = document.createElement('option')
        valoradd.text = `Valor ${n} adicionado.`
        lista.appendChild(valoradd)
        res.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já existente.")
    }
    num.value = '' // Limpa o campo
    num.focus()  // Coloca o cursor no elemento determinado.
}

function analisar() {
    if (valores.length == 0) {
        window.alert('Adicione valores para análise.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(pos in valores) {
            soma += valores[pos] 
            
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Foram cadastrados ${tot} valores</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>` 

    }
}

    
    

    