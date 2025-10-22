function calcular() {
    //Pegando os inputs e transformando em variáveis
    let valor1 = document.querySelector('input#valor1')
    let valor2 = document.querySelector('input#valor2')
    let res = document.querySelector('div#res')
    let soma = document.getElementById('soma')
    let sub = document.getElementById('subtracao')
    let div = document.getElementById('divisao')
    let multi = document.getElementById('multiplicacao')

    //Validando se os inputs foram preenchidos com algum número
    if (valor1.value.length == 0 || valor2.value.length == 0) {
        alert('Erro! Insira um valor em cada campo')
    } else {
        //Transformando o input de String para Number
        let num1 = Number(valor1.value)
        let num2 = Number(valor2.value)

        //Validando qual das opções do input radio foi selecionada e realizando a operação
        if (soma.checked) {
            let soma_res = num1 + num2
            //Pegando o resultado da soma e formatando para que o número tenha no máximo 2 casas decimais
            let soma_res_final = soma_res.toFixed(2)
            res.innerHTML = `A soma entre ${num1} e ${num2} resulta em ${soma_res_final}`
        } else if (sub.checked) {
            let sub_res = num1 - num2
            //Pegando o resultado da subtração e formatando para que o número tenha no máximo 2 casas decimais
            let sub_res_final = sub_res.toFixed(2)
            res.innerHTML = `A subtração entre ${num1} e ${num2} resulta em ${sub_res_final}`
        } else if (div.checked) {
            let div_res = num1 / num2
            //Pegando o resultado da divisão e formatando para que o número tenha no máximo 2 casas decimais
            let div_res_final = div_res.toFixed(2)

            res.innerHTML = `A divisão entre ${num1} e ${num2} resulta em ${div_res_final}`
        } else {
            let multi_res = num1 * num2
            //Pegando o resultado da multiplicação e formatando para que o número tenha no máximo 2 casas decimais
            let multi_res_final = multi_res.toFixed(2)

            res.innerHTML = `A multiplicação entre ${num1} e ${num2} resulta em ${multi_res_final}`
        }


    }


}