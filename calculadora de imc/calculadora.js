
//ainda estou aprendendo, perdoe pelo código muito extenso.. :(

function calcular(){
    var a = window.document.getElementById('peso');
    var b = window.document.getElementById('altura');

     var peso = Number(a.value) 
     var altura = Number(b.value)

     var result = peso/(altura**2)


    var resposta = window.document.getElementById('resposta');
    resposta.style.display = 'flex'

    window.document.getElementById('res_imc').innerText = result.toFixed(1);

    //função if para campo do peso ideal

    if ( altura >= 2.00 ) {
        window.document.getElementById('res_p_ideal').innerText = '72kg - 96kg';
    } else if( altura >= 1.95 ) {
        window.document.getElementById('res_p_ideal').innerText = '68kg - 92kg';
    } else if( altura >= 1.90 ) {
        window.document.getElementById('res_p_ideal').innerText = '65kg - 87kg';
    } else if( altura >= 1.85 ) {
        window.document.getElementById('res_p_ideal').innerText = '62kg - 83kg';
    } else if( altura >= 1.80 ) {
        window.document.getElementById('res_p_ideal').innerText = '60kg - 79kg';
    } else if( altura >= 1.75 ) {
        window.document.getElementById('res_p_ideal').innerText = '56kg - 75kg';
    } else if( altura >= 1.70 ) {
        window.document.getElementById('res_p_ideal').innerText = '53kg - 71kg';
    } else if( altura >= 1.65 ) {
        window.document.getElementById('res_p_ideal').innerText = '50kg - 67kg';
    } else if( altura >= 1.60 ) {
        window.document.getElementById('res_p_ideal').innerText = '47kg - 63kg';
    } else if( altura >= 1.55 ) {
        window.document.getElementById('res_p_ideal').innerText = '44kg - 59kg';
    } else if( altura >= 1.50 ) {
        window.document.getElementById('res_p_ideal').innerText = '41kg - 56kg';
    } else {
        // Se necessário, você pode adicionar uma mensagem de erro ou condição para valores menores que 1.50
        window.document.getElementById('res_p_ideal').innerText = 'Altura fora da faixa de referência';
    };
    
 //finção if para escala de imc (2.00m)
    if (altura >= 2.00 && result <= 18.5){
        window.document.getElementById('color').style.backgroundColor = '#F2DC5D';
        window.document.getElementById('res_escala').innerText = "abaixo do peso";
    } else if(altura >= 2.00 && (result >= 18.8 && result <=24.9)){
        window.document.getElementById('color').style.backgroundColor = '#109648';
        window.document.getElementById('res_escala').innerText = "peso normal";
    } else if(altura >= 2.00 && (result >= 25.0 && result <= 29.9)){
        window.document.getElementById('color').style.backgroundColor = '#D7263D';
        window.document.getElementById('res_escala').innerText = "acima do peso";
    }else if(altura >= 2.00 && result >= 30.0){
        window.document.getElementById('color').style.backgroundColor = '#662E9B';
        window.document.getElementById('res_escala').innerText = "obesidade";

    //finção if para escala de imc (1.95m)
    } else if ((altura < 2.00 && altura >=1.95) && result <= 18.5){
        window.document.getElementById('color').style.backgroundColor = '#F2DC5D';
        window.document.getElementById('res_escala').innerText = "abaixo do peso";
    } else if((altura < 2.00 && altura >=1.95) && (result >= 18.8 && result <=24.9)){
        window.document.getElementById('color').style.backgroundColor = '#109648';
        window.document.getElementById('res_escala').innerText = "peso normal";
    } else if((altura < 2.00 && altura >=1.95) && (result >= 25.0 && result <= 29.9)){
        window.document.getElementById('color').style.backgroundColor = '#D7263D';
        window.document.getElementById('res_escala').innerText = "acima do peso";
    }else if((altura < 2.00 && altura >=1.95) && result >= 30.0){
        window.document.getElementById('color').style.backgroundColor = '#662E9B';
        window.document.getElementById('res_escala').innerText = "obesidade";

//finção if para escala de imc (1.90m)
    } else if ((altura < 1.95 && altura >=1.90) && result <= 18.5){
        window.document.getElementById('color').style.backgroundColor = '#F2DC5D';
        window.document.getElementById('res_escala').innerText = "abaixo do peso";
    } else if((altura < 1.95 && altura >=1.90) && (result >= 18.8 && result <=24.9)){
        window.document.getElementById('color').style.backgroundColor = '#109648';
        window.document.getElementById('res_escala').innerText = "peso normal";
    } else if((altura < 1.95 && altura >=1.90) && (result >= 25.0 && result <= 29.9)){
        window.document.getElementById('color').style.backgroundColor = '#D7263D';
        window.document.getElementById('res_escala').innerText = "acima do peso";
    }else if((altura < 1.95 && altura >=1.90) && result >= 30.0){
        window.document.getElementById('color').style.backgroundColor = '#662E9B';
        window.document.getElementById('res_escala').innerText = "obesidade";
        
//finção if para escala de imc (1.85m)
    } else if ((altura < 1.90 && altura >=1.85) && result <= 18.5){
        window.document.getElementById('color').style.backgroundColor = '#F2DC5D';
        window.document.getElementById('res_escala').innerText = "abaixo do peso";
    } else if((altura < 1.90 && altura >=1.85) && (result >= 18.8 && result <=24.9)){
        window.document.getElementById('color').style.backgroundColor = '#109648';
        window.document.getElementById('res_escala').innerText = "peso normal";
    } else if((altura < 1.90 && altura >=1.85) && (result >= 25.0 && result <= 29.9)){
        window.document.getElementById('color').style.backgroundColor = '#D7263D';
        window.document.getElementById('res_escala').innerText = "acima do peso";
    }else if((altura < 1.90 && altura >=1.85) && result >= 30.0){
        window.document.getElementById('color').style.backgroundColor = '#662E9B';
        window.document.getElementById('res_escala').innerText = "obesidade";

    //finção if para escala de imc (1.80m)
    }else if ((altura < 1.85 && altura >=1.80) && result <= 18.5){
        window.document.getElementById('color').style.backgroundColor = '#F2DC5D';
        window.document.getElementById('res_escala').innerText = "abaixo do peso";
    } else if((altura < 1.85 && altura >=1.80) && (result >= 18.8 && result <=24.9)){
        window.document.getElementById('color').style.backgroundColor = '#109648';
        window.document.getElementById('res_escala').innerText = "peso normal";
    } else if((altura < 1.85 && altura >=1.80) && (result >= 25.0 && result <= 29.9)){
        window.document.getElementById('color').style.backgroundColor = '#D7263D';
        window.document.getElementById('res_escala').innerText = "acima do peso";
    }else if((altura < 1.85 && altura >=1.80) && result >= 30.0){
        window.document.getElementById('color').style.backgroundColor = '#662E9B';
        window.document.getElementById('res_escala').innerText = "obesidade";

//finção if para escala de imc (1.75m)
    }else if ((altura < 1.80 && altura >=1.75) && result <= 18.5){
        window.document.getElementById('color').style.backgroundColor = '#F2DC5D';
        window.document.getElementById('res_escala').innerText = "abaixo do peso";
    } else if((altura < 1.80 && altura >=1.75) && (result >= 18.8 && result <=24.9)){
        window.document.getElementById('color').style.backgroundColor = '#109648';
        window.document.getElementById('res_escala').innerText = "peso normal";
    } else if((altura < 1.80 && altura >=1.75) && (result >= 25.0 && result <= 29.9)){
        window.document.getElementById('color').style.backgroundColor = '#D7263D';
        window.document.getElementById('res_escala').innerText = "acima do peso";
    }else if((altura < 1.80 && altura >=1.75) && result >= 30.0){
        window.document.getElementById('color').style.backgroundColor = '#662E9B';
        window.document.getElementById('res_escala').innerText = "obesidade";

    //finção if para escala de imc (1.70m)
    }else if ((altura < 1.75 && altura >=1.70) && result <= 18.5){
        window.document.getElementById('color').style.backgroundColor = '#F2DC5D';
        window.document.getElementById('res_escala').innerText = "abaixo do peso";
    } else if((altura < 1.75 && altura >=1.70) && (result >= 18.8 && result <=24.9)){
        window.document.getElementById('color').style.backgroundColor = '#109648';
        window.document.getElementById('res_escala').innerText = "peso normal";
    } else if((altura < 1.75 && altura >=1.70) && (result >= 25.0 && result <= 29.9)){
        window.document.getElementById('color').style.backgroundColor = '#D7263D';
        window.document.getElementById('res_escala').innerText = "acima do peso";
    }else if((altura < 1.75 && altura >=1.70) && result >= 30.0){
        window.document.getElementById('color').style.backgroundColor = '#662E9B';
        window.document.getElementById('res_escala').innerText = "obesidade";

    //finção if para escala de imc (1.65m)
    }else if ((altura < 1.70 && altura >=1.65) && result <= 18.5){
        window.document.getElementById('color').style.backgroundColor = '#F2DC5D';
        window.document.getElementById('res_escala').innerText = "abaixo do peso";
    } else if((altura < 1.70 && altura >=1.65) && (result >= 18.8 && result <=24.9)){
        window.document.getElementById('color').style.backgroundColor = '#109648';
        window.document.getElementById('res_escala').innerText = "peso normal";
    } else if((altura < 1.70 && altura >=1.65) && (result >= 25.0 && result <= 29.9)){
        window.document.getElementById('color').style.backgroundColor = '#D7263D';
        window.document.getElementById('res_escala').innerText = "acima do peso";
    }else if((altura < 1.70 && altura >=1.65) && result >= 30.0){
        window.document.getElementById('color').style.backgroundColor = '#662E9B';
        window.document.getElementById('res_escala').innerText = "obesidade";

    //finção if para escala de imc (1.60m)
    }else if ((altura < 1.65 && altura >=1.60) && result <= 18.5){
        window.document.getElementById('color').style.backgroundColor = '#F2DC5D';
        window.document.getElementById('res_escala').innerText = "abaixo do peso";
    } else if((altura < 1.65 && altura >=1.60) && (result >= 18.8 && result <=24.9)){
        window.document.getElementById('color').style.backgroundColor = '#109648';
        window.document.getElementById('res_escala').innerText = "peso normal";
    } else if((altura < 1.65 && altura >=1.60) && (result >= 25.0 && result <= 29.9)){
        window.document.getElementById('color').style.backgroundColor = '#D7263D';
        window.document.getElementById('res_escala').innerText = "acima do peso";
    }else if((altura < 1.65 && altura >=1.60) && result >= 30.0){
        window.document.getElementById('color').style.backgroundColor = '#662E9B';
        window.document.getElementById('res_escala').innerText = "obesidade";

    //finção if para escala de imc (1.55m)
    }else if ((altura < 1.60 && altura >=1.55) && result <= 18.5){
        window.document.getElementById('color').style.backgroundColor = '#F2DC5D';
        window.document.getElementById('res_escala').innerText = "abaixo do peso";
    } else if((altura < 1.60 && altura >=1.55) && (result >= 18.8 && result <=24.9)){
        window.document.getElementById('color').style.backgroundColor = '#109648';
        window.document.getElementById('res_escala').innerText = "peso normal";
    } else if((altura < 1.60 && altura >=1.55) && (result >= 25.0 && result <= 29.9)){
        window.document.getElementById('color').style.backgroundColor = '#D7263D';
        window.document.getElementById('res_escala').innerText = "acima do peso";
    }else if((altura < 1.60 && altura >=1.55) && result >= 30.0){
        window.document.getElementById('color').style.backgroundColor = '#662E9B';
        window.document.getElementById('res_escala').innerText = "obesidade";

    //finção if para escala de imc (1.60m)
    }else if ((altura < 1.55 && altura >=1.50) && result <= 18.5){
        window.document.getElementById('color').style.backgroundColor = '#F2DC5D';
        window.document.getElementById('res_escala').innerText = "abaixo do peso";
    } else if((altura < 1.55 && altura >=1.50) && (result >= 18.8 && result <=24.9)){
        window.document.getElementById('color').style.backgroundColor = '#109648';
        window.document.getElementById('res_escala').innerText = "peso normal";
    } else if((altura < 1.55 && altura >=1.50) && (result >= 25.0 && result <= 29.9)){
        window.document.getElementById('color').style.backgroundColor = '#D7263D';
        window.document.getElementById('res_escala').innerText = "acima do peso";
    }else if((altura < 1.55 && altura >=1.50) && result >= 30.0){
        window.document.getElementById('color').style.backgroundColor = '#662E9B';
        window.document.getElementById('res_escala').innerText = "obesidade";
    }
 
}