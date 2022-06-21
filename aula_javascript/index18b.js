function tabuada(){
    let num = document.getElementById('txt_n')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){    
        window.alert('Por favor, digite um numero!')    
    }else{
        let n = Number(num.value)
        let c = 1
        let r = n*c
        tab.innerHTML = ''
        while (c <=10){
            let item = document.createElement('option')
            item.txt =`${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}