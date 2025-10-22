function verificar(){
    //Pegando os inputs do HTML e transformando em variáveis
    let idade = document.querySelector('input#idade')
    let n_estuda = document.getElementById('n_estudante')
    let estuda = document.getElementById('estudante')
    let res = document.getElementById('res')
    let tarifa = 2.5

    //Validando se foi inserido algum valor no input de idade
    if (idade.value.length == 0){
        alert('Erro! Insira sua idade')
    }   else{
        //Transformando o input idade de String para Number
        let n_idade = Number(idade.value)

        if (n_idade < 6){
            res.innerHTML = `Sua tarifa é gratuita.`
        } else if (estuda.checked){
            let tarifa_final = tarifa - ((tarifa/100) * 50)
            res.innerHTML = `Você tem direito a 50% de desconto na tarifa. Sua tarifa é R$ ${tarifa_final}`

        } else if (n_idade >= 60) {
            let tarifa_final = tarifa - ((tarifa/100) * 30)
            res.innerHTML = `Você tem direito a 30% de desconto na tarifa. Sua tarifa é R$ ${tarifa_final}`
        } else {
            res.innerHTML = `Sua tarifa é R$ ${tarifa}`
        }

    }
















}