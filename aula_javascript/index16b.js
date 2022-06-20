function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','./imagens/bebe-masc.jpg') //CRIANÇA
            }else if (idade < 21){
                img.setAttribute('src','./imagens/jovem-masc.jpg')//JOVEM
            }else if (idade < 50){
                img.setAttribute('src','./imagens/adulto-masc.jpg')//ADULTO
            }else{
                img.setAttribute('src','./imagens/idoso-masc.jpg')//IDOSO
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','./imagens/bebe-fem.jpg')//CRIANÇA
            }else if (idade < 21){
                img.setAttribute('src','./imagens/jovem-fem.jpg')//JOVEM
            }else if (idade < 50){
                img.setAttribute('src','./imagens/adulto-fem.jpg')//ADULTO
            }else{
                img.setAttribute('src','./imagens/idoso-fem.jpg')//IDOSO
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild (img)
    }

}