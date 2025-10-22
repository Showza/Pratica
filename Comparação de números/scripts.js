function verificar(){
    let valor1 = document.querySelector('input#valor1')
    let valor2 = document.querySelector('input#valor2')
    let res = document.getElementById('res')

    if (valor1.value.length == 0 || valor2.value.length == 0){
        alert('Erro! Insira um valor em cada campo')
    } else {
        let num1 = Number(valor1.value)
        let num2 = Number(valor2.value)
        
        if (num1 > num2){
            res.innerHTML = `O valor ${num1} é <strong>maior</strong> que o valor ${num2}`
        } else if (num1 == num2){
            res.innerHTML = `O valor ${num1} é <strong>igual</strong> ao valor ${num2}`
        } else {
            res.innerHTML = `O valor ${num1} é <strong>menor</strong> que o valor ${num2}`
        }

    }

}