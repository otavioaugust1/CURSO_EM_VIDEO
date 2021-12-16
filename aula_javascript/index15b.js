function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){ // BOM DIA
        img.src = 'fotoManha.png' 
        document.body.style.background = '#0f62fe'
    } else if (hora >= 12 && hora < 18) { //BOA TARDE
        img.src = 'fotoTarde.png'  
        document.body.style.background = '#f1c21b'
    } else { //BOA NOITE
        img.src = 'fotoNoite.png'  
        document.body.style.background = "#273036"
    }
}


