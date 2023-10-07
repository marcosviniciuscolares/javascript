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