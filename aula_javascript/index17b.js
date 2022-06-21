function contar(){
    let ini = document.getElementById('txt_i')
    let fim = document.getElementById('txt_f')
    let passo = document.getElementById('txt_p')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value == 0 || passo.value == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossível contar! `
    }else{
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert(`Passo invalido! Considerando PASSO 1`)
            p = 1
        }

        if(i < f){ //CONTAGEM CRESCENTE
            for(let c = i; c <= f; c+= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }     
        }else{ // CONTAGEM REGRESSIVA
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } res.innerHTML += `\u{1F3C1}`
    }
}