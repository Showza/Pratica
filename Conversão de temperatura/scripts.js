function converter(){
    let temperatura = document.getElementById('txtt')
    let tempC = document.getElementById('celsius')
    let tempF = document.getElementById('fahrenheit')
    let res = document.getElementById('res')

    if (temperatura.value.length == 0){
        window.alert('Insira um número.')
    } else{
        if (tempC.checked){
            let temp = Number(temperatura.value)
            let fah = (temp * 9/5) + 32
            res.innerHTML = `${temp}°C em Fahrenheit fica: ${fah}°F`

        } else{
            let temp = Number(temperatura.value)
            let cel = (temp - 32) * 5/9
            res.innerHTML = `${temp}°F em Celsius fica: ${cel}°C`

        }
    }








}