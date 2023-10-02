function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('iano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO, volte e coloque o ano do seu nascimento.')
    } else {
        let fsex = document.getElementsByName('radsex') 
        let idade = ano - Number(fano.value)
        let genero = ''

        if (fsex[0].checked) {
            genero = 'Homen'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
    }
}