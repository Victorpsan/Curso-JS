/*
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option') //Cria a 'tag' '<option></option>' no HTML
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c} // Codigo para recuperar valor escolhido
            tab.appendChild(item)
            c++
        }
    }
}
*/
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text += `${n} x ${c} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
    