function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex') //checkbox precisam ter o mesmo nome.
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')// Cria um elemento HTML
        img.setAttribute('id', 'foto') // cria id='foto' para o elemento 'img'
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'HOMEM'
            if (idade >= 0 && idade < 3) {
                //bebê
                img.setAttribute('src', 'bb-m.png')
            } else if (idade >= 3 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-m.png')
            } else if (idade >= 10 && idade < 21){
                //adolescente
                img.setAttribute('src', 'adolescente-m.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'MULHER'
            if (idade >= 0 && idade < 3) {
                //bebê
                img.setAttribute('src', 'bb-f.png')
            } else if (idade >= 3 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-f.png')
            } else if (idade >= 10 && idade < 21){
                //adolescente
                img.setAttribute('src', 'adolescente-f.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        } //'.checked' indica que o checkbox deve estar marcado
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //adiciona 
    }
    
    
}