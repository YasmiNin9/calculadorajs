function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var S = n1 + n2
    som.innerHTML = `O resultado da soma dos valores é ${S}`
}

function sub() {
    var tn1 = document.getElementById('sutn1')
    var tn2 = document.getElementById('sutn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var U = n1 - n2
    su.innerHTML = `O resultado da subtração dos valores é ${U}`
}

function multi() {
    var tn1 = document.getElementById('mtn1')
    var tn2 = document.getElementById('mtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var M = n1 * n2
    mu.innerHTML = `O resultado da multiplicação dos valores é ${M}`

}

function entrouS() {
    som.innerHTML = `Digite um novo valor...`
}

function entrySu(){
    su.innerHTML = `Digite um novo valor...`
}

function entrouMu(){
    mu.innerHTML = `Digite um novo valor...`
}
