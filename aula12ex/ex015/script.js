function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3) {
                //Bebe
                img.setAttribute('src', 'bebemasc.png')
            } else if (iidade < 11) {
                //Crianca
                img.setAttribute('src', 'criancamasc.png')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'adolmasc.png')
            } else if (idade < 64) {
                //Adulto
                img.setAttribute('src', 'adoltomasc.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosomasc.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //Bebe
                img.setAttribute('src', 'bebefem.png')
            } else if (idade < 11) {
                //Crianca
                img.setAttribute('src', 'criancafem.png')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'adolfem.png')
            } else if (idade < 64) {
                img.setAttribute('src', 'adultofem.png')
                //Adulto
            } else {
                img.setAttribute('src', 'idosofem.png')
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)
    }
}