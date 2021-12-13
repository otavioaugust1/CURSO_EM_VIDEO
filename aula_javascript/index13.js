var agora = new Date()
var diaSem = agora.getDay()
//console.log (diaSem)
switch (diaSem){
    case 0:
        console.log ('DOMINGO')
        break
    case 1:
        console.log ('SEGUNDA')
        break
    case 2:
        console.log ('TERÇA')
        break
    case 3:
        console.log ('QUARTA')
        break
    case 4:
        console.log ('QUINTA')
        break
    case 5:
        console.log ('SEXTA')
        break
    case 6:
        console.log ('SABADO')
        break
    default:
        console.log ('[ERRO] Dia inválido!')
        break
}