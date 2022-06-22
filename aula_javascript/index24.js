// ideia de objeto

let amigo = {
    nome: 'Otávio Augusto',
    sexo: 'M',
    peso: '91.4',
    engorda(p){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engorda(1)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

