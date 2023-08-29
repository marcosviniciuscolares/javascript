let agora = new Date()
let hora = agora.getHours()

console.log(`São ${hora} da manha`)

if (hora < 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else if (hora <= 23) {
    console.log('Boa noite')
}