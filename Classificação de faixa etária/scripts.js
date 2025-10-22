function verificar() {
    let idade = document.querySelector('input#idade')
    let res = document.querySelector('div#res')

    if (idade.value.length == 0) {
        alert('Erro! Por favor insira sua idade no campo')
    } else {
        let n_idade = Number(idade.value)

        if (n_idade < 0) {
            alert('Erro! Insira um valor válido')
        } else if (n_idade <= 12) {
            res.innerHTML = `Você tem ${n_idade} anos, sua faixa etária é: Criança`
        } else if (n_idade <= 17) {
            res.innerHTML = `Você tem ${n_idade} anos, sua faixa etária é: Adolescente`
        } else if (n_idade <= 59) {
            res.innerHTML = `Você tem ${n_idade} anos, sua faixa etária é: Adulto`
        } else {
            res.innerHTML = `Você tem ${n_idade} anos, sua faixa etária é: Idoso`
        }
    }

}