function Contar() {
    let inicio = document.getElementById('inumero1')
    let fim = document.getElementById('inumero2')
    let passo = document.getElementById('inumero3')
    let resposta = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resposta.innerHTML = 'impossivel contar!'
        window.alert('[ERRO]')
    } else {
        resposta.innerHTML = 'Contando... <br>'
        let numi = Number(inicio.value)
        let numi2 = Number(fim.value)
        let numi3 = Number(passo.value)

        if (numi2 <= 0) {
            window.alert('Passo inválido, considerando passo(1)')
            p = 1
        }
        
       if (numi < numi2) {
         for (let contador = numi; contador <= numi2; contador += numi3){
            resposta.innerHTML += `${contador} \u{1F449}`
         }
       } else {
        for (let contador = numi; contador >= numi2; contador -= numi3){
            resposta.innerHTML += `${contador} \u{1F449}`
        }
       }
       resposta.innerHTML += `\u{1F3C1}`
    }
}