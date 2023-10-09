let numero1 = document.querySelector('input#inumero')
let lista = document.querySelector('select#ilista')
let resposta = document.querySelector('div#res')
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

        let item = document.createElement('option')
        item.text = `Valor ${numero1.value} adicionado.`
        lista.appendChild(item)
        resposta.innerHTML = ''

    } else {
        window.alert('ERRO. Número já adicionado ou não válido!')
    }

    numero1.value = ''
    numero.focus()
}

function Finalizar() {
    if (valores.length == 0) {
        window.alert('Valores não adicionados')
    } else {
        let tudo = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        média = soma / tudo

        resposta.innerHTML += ''
        resposta.innerHTML += `<p>Total de números é ${tudo}</p>`
        resposta.innerHTML += `<p>A média dos números é ${média}</p>`
        resposta.innerHTML += `<p>O menor número é ${menor}</p>`
        resposta.innerHTML += `<p>O maior número é ${maior}</p>`
        resposta.innerHTML += `<p>A soma de todos os números é ${soma}</p>`
    }
}