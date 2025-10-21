function calcular() {
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let res = document.getElementById('res')

    if (peso.value.length == 0 || altura.value.length == 0) {
        alert('Erro! Insira seu peso e sua altura')
    } else {
        let p = Number(peso.value)
        let a = Number(altura.value)
        let imc = p / a ** 2
        let imcfinal = imc.toFixed(2)

        res.innerHTML = `Seu IMC é ${imcfinal}`

        if (imcfinal < 18.5) {
            let grau_obesidade = document.createElement('p')
            grau_obesidade.textContent = `A classificação do seu IMC é: Magreza`
            res.appendChild(grau_obesidade)

        } else if (imcfinal <= 24.5) {
            let grau_obesidade = document.createElement('p')
            grau_obesidade.textContent = `A classificação do seu IMC é: Normal`
            res.appendChild(grau_obesidade)

        } else if (imcfinal <= 29.9) {
            let grau_obesidade = document.createElement('p')
            grau_obesidade.textContent = `A classificação do seu IMC é: Sobrepeso`
            res.appendChild(grau_obesidade)

        } else if (imcfinal <= 39.9) {
            let grau_obesidade = document.createElement('p')
            grau_obesidade.textContent = `A classificação do seu IMC é: Obesidade`
            res.appendChild(grau_obesidade)

        } else {
            let grau_obesidade = document.createElement('p')
            grau_obesidade.textContent = `A classificação do seu IMC é: Obesidade grave`
            res.appendChild(grau_obesidade)

        }
    }


}