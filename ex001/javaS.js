function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = 22

    msg.innerHTML = `Agora são ${hora} horas`

    if ( hora >= 0 && hora < 12 ) {
        img.src = './img/manha.jpg'
        document.body.style.background = '#FBF6A9'
    } else if ( hora >= 12 && hora < 18 ) {
        img.src = './img/tarde.jpg'
        document.body.style.background = '#CB8354'
    } else {
        img.src = './img/noite.jpg'
        document.body.style.background = '#17384C'
    }
}