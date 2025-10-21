function calcular(){
    let base = document.getElementById('base')
    let altura = document.getElementById('altura')
    let res = document.getElementById('res')
    
    if (base.value.length == 0 || altura.value.length == 0){
        alert('Erro! Insira a altura e a base do retângulo')
    } else{
        let b = Number(base.value)
        let a = Number(altura.value)

        if (a <= 0 || b <= 0){
            alert('Erro! Insira um valor válido para a altura e base')
        } else {
            let area = b*a
            let perimetro = 2 * (b + a)
            res.innerHTML = `A área do retângulo é ${area}m².<br>`
            res.innerHTML += `O perímetro do retângulo é ${perimetro}m.`
        }
    }


}