function relogio(){
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var segundos = agora.getSeconds()
    window.document.getElementById('horas').innerText = hora;
    window.document.getElementById('minutos').innerText = minutos;
    window.document.getElementById('segundos').innerText = segundos;

    if(hora > 0 && hora < 12){window.document.getElementById('img_fundo').style.backgroundImage = 'url(img/amanhecer.jpg)'}
    else if(hora >= 12 && hora <= 17){ window.document.getElementById('img_fundo').style.backgroundImage = 'url(img/entardecer.webp)'}
    else{window.document.getElementById('img_fundo').style.backgroundImage = 'url(img/noite.jpg)'};
}
    setInterval(relogio,500);

    


    var dia = new Date()
    var diaSem = dia.getDay()
    switch(diaSem) {
        case 0:
            var dom = window.document.getElementById('diaSemana').innerText = 'Domingo'
        break
        case 1:
            var seg = window.document.getElementById('diaSemana').innerText = 'Segunda-Feira'
        break 
        case 2:
             var ter = window.document.getElementById('diaSemana').innerText = 'Terça-Feira'
        break 
        case 3:
            var quar = window.document.getElementById('diaSemana').innerText = 'Quarta-Feira'
        break
         case 4:
             var quin = window.document.getElementById('diaSemana').innerText = 'Quinta-Feira'
        break 
        case 5:
             var sex = window.document.getElementById('diaSemana').innerText = 'Sexta-Feira'
        break
        case 6:
             var sab = window.document.getElementById('diaSemana').innerText = 'Sábado'
        break
        default:
            console.log('[ERRO] Dia invalido!')
    }