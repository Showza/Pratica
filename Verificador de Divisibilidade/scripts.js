function verificar(){
    let num1 = document.querySelector('input#num1')
    let num2 = document.querySelector('input#num2')
    let res = document.querySelector('div#res')

    if (num1.value.length == 0 || num2.value.length == 0){
        alert('Erro! Insira um número válido nos dois campos')
    } else {
        let div1 = Number(num1.value)
        let div2 = Number(num2.value)
        let div_res = div1 / div2
        let resto_div = div1 % div2

        if (resto_div == 0){
            res.innerHTML = `Sim! O número ${div1} é divisível por ${div2}.`
        } else{
            res.innerHTML = `Não! O número ${div1} não é divisível por ${div2}.`
        }

        
    }


}