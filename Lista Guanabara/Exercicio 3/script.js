function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var resultado = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = "Impossível Contar!"
        window.alert('Por favor preencha os dados!')
    }

    else {

        resultado.innerHTML = 'Contando: <br> '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {

            window.alert('Passo inválido! Considerando Passo1')
            p = 1

        }

        if (i < f) {

            //Contagem crescente
            for (contador = i; contador <= f; contador += p) {
                resultado.innerHTML += `${contador} \u{1f449}`




            }
            resultado.innerHTML += `\u{1F3C1}`
        } else {
            //Contagem decrescente 
            for (contador = i; contador >= f; contador -= p) {

                resultado.innerHTML += `${contador} \u{1F449}`


            }

            resultado.innerHTML += `\u{1F3C1}`




        }


    }






}