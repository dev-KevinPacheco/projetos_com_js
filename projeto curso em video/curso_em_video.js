//declaração de variavis 

let num = window.document.getElementById("campo_text");
let lista = window.document.getElementById("caixa_texto");
let final = window.document.getElementById("finalizar");
let valores = [];


//verificação das condiçoes dos numeros

function enumero(n){
    if(Number(n) >=1 && Number(n)<= 100){
        return true
    }else{
        return false
    }
}
//verificação se o numero ja esta no painel de retorno 

 function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


//função para incluir valor no painel de retorno e no array

function incluir(){
    if(enumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor  ${num.value} foi adicionado.`
        lista.appendChild(item)
    }else{
        window.alert("valor invalido ou ja encontrado na lista!")
    }
    num.value = ""
    num.focus()
}

//função finalizar operações

function finalizar(){
    //oganiza os elementos do array em ordem numerica crescente
    console.log(valores.sort((a, b) => a - b));

    //informa o total de numeros cadastrados     
    window.document.getElementById("r1").innerText=`O total de números cadastrados foi de ${valores.length}`


    //informa o menor numero da lista
    window.document.getElementById("r2").innerText=`O menor valor cadastrado foi ${valores[0]}`

    //oganiza os elementos do array em ordem numerica decrescente
    valores.sort((a,b) => b - a)

    //informa o maior valor da lista
    window.document.getElementById("r3").innerText=`O maior valor cadastrado foi ${valores[0]}`

    //faz o somatorio de todos os elemntos da lista
    let soma = 0;
    for (let j = 0; j < valores.length; j++) {
    soma += valores[j];
    }
    document.getElementById("r4").innerText = `A soma de todos os números adicionados é ${soma}`;

    //meida entre os elementos da lista
    let soma_m = 0;
    for (let j = 0; j < valores.length; j++) {
    soma_m += valores[j];
    }
    let media = soma_m / valores.length;
    document.getElementById("r5").innerText = `A média entre os números adicionados é ${media}`;


    //abre o bloco de respostas
    window.document.getElementById("resposta").style.display= "block"
}

    //fecha o cloco de respostas
function fechar(){
    window.document.getElementById("resposta").style.display= "none";
}