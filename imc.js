let calcular = document.getElementById('calcular')

function imc (){
    let nome = document.getElementById('nome').value
    let altura = +document.getElementById('altura').value
    let peso = +document.getElementById('peso').value
    let resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== ''){
        
        let valorIMC =  (peso/(altura * altura)).toFixed(1)

        let classificacao = ''
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso esperedado para seu corpo.'
        }else if(valorIMC < 25){
            classificacao = 'com o peso ideal esperado para seu corpo. É isso aí!!!'
        }else if(valorIMC<30){
            classificacao = 'levemente acima do peso.'
        }else if(valorIMC<35){
            classificacao = 'com obesidade grau I.'
        }else if(valorIMC<40){
            classificacao = 'com obesidade grau II.'
        }else if(valorIMC<35){
            classificacao = 'com obesidade grau III. Cuidado, procure um médico!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`

    }else{
        resultado.textContent = 'Preencha todos os campos!!!'
    }


}

calcular.addEventListener('click', imc)
