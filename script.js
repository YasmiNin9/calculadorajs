function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var S = n1 + n2
    som.innerHTML = `O resultado da soma dos valores é ${S}`
    if (tn2.value.length == 0) { //verificação
        window.alert(`Verifique os valores antes de continuar!`)
        som.innerHTML = `Por favor, insira algum valor...`
    } else if (tn1.value.length == 0){
        window.alert(`Verifique os valores antes de continuar!`)
        som.innerHTML = `Por favor, insira algum valor...`
    }
}

function sub() {
    var tn1 = document.getElementById('sutn1')
    var tn2 = document.getElementById('sutn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var U = n1 - n2
    su.innerHTML = `O resultado da subtração dos valores é ${U}`
    if (tn2.value.length == 0){ //verificação
        window.alert(`Verifique os valores antes de continuar!`)
        su.innerHTML = `Por favor, insira algum valor...`
    } else if (tn1.value.length == 0){
        window.alert(`Verifique os valores antes de continuar!`)
        su.innerHTML = `Por favor, insira algum valor...`
    }
}

function multi() {
    var tn1 = document.getElementById('mtn1')
    var tn2 = document.getElementById('mtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var M = n1 * n2
    mu.innerHTML = `O resultado da multiplicação dos valores é ${M}`
    if (tn2.value.length == 0){
        window.alert(`Verifique os valores antes de continuar!`)
        mu.innerHTML = `Por favor, insira algum valor...`
    } else if (tn1.value.length == 0){
        window.alert(`Verifique os valores antes de continuar!`)
        mu.innerHTML = `Por favor, insira algum valor...`
    }
}

function divi() {
    var tn1 = document.getElementById('dtn1')
    var tn2 = document.getElementById('dtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var D = n1 / n2
    di.innerHTML = `O resultado da divisão dos valores é ${D}`
    if (tn2.value.length == 0){
        window.alert(`Verifique os valores antes de continuar!`)
        di.innerHTML = `Por favor, insira algum valor...`
    } else if (tn1.value.length == 0){
        window.alert(`Verifique os valores antes de continuar!`)
        di.innerHTML = `Por favor, insira algum valor...`
    }
}

function entrouS() {
    som.innerHTML = `Digite um novo valor...`
}

function entrouSu(){
    su.innerHTML = `Digite um novo valor...`
}

function entrouMu(){
    mu.innerHTML = `Digite um novo valor...`
}

function entrouDi(){
    di.innerHTML = `Digite um novo valor...`
}