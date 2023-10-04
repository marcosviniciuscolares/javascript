let numero = document.querySelector('input#inumero')
let lista = document.querySelector('select#ilista')
let res= document.querySelector('div#res')
let valores = []

function isNumero(n) {
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
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))

        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Número inválido ou já na lista')
    }

    numero.value = ''
    numero.focus()
}

function Finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores para finalizar')
    } else {
        let total = valores.length  
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

        média = soma / total
        res.innerHTML += ''
        res.innerHTML += `<p> Ao todo temos ${total} valores cadastrados </p>`
        res.innerHTML += `<p> O maior número é ${maior}</p>`
        res.innerHTML += `<p> O menor número é ${menor}</p>`
        res.innerHTML += `<p>À soma dos números é ${soma}`
        res.innerHTML += `<p>À média dos números é de ${média}`

    }
}