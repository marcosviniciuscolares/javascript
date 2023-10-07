let numero1 = document.querySelector('input#inumero')
let lista = document.querySelector('select#ilista')
let resposta = document.querySelector('div#Res')
let valores = []

function iNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if (iNumero(numero1.value) && !inLista(numero1.value, valores)) {
        valores.push(Number(numero1.value))

        let item = createElement('option')
        item.text = `Valor ${numero1.value} adicionado!`
        lista.appendChild(item)
        resposta.innerHTML = ''
    } else {
        window.alert('ERRRRRRRRRRRRRRRRRRRO')
    }
}