function Gerar() {
    let numero = document.getElementById('inumero')
    let atabu = document.getElementById('itabu')

    if (numero.value.length == 0) {
        window.alert('[ERRO] Digite um número válido')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
    
}