//abrir card ryder
function ryder(){
    var new_page_ryder = window.document.getElementById('card_ryder')
    new_page_ryder.style.display = 'flex'

    var close_cj = window.document.getElementById('card_cj')
    close_cj.style.display = 'none'

    var close_sweet = window.document.getElementById('card_sweet')
    close_sweet.style.display = 'none'

    var close_big = window.document.getElementById('card_big')
    close_big.style.display = 'none'
}
//fechar card ryder
function exit_ryder(){
    var exit_page_ryder = window.document.getElementById('card_ryder')
    exit_page_ryder.style.display = "none"
}


//abrir card big smoke
function big(){
    var new_page_big = window.document.getElementById('card_big')
    new_page_big.style.display = 'flex'

    var close_ryder1 = window.document.getElementById('card_ryder')
    close_ryder1.style.display = 'none'

    var close_cj1 = window.document.getElementById('card_cj')
    close_cj1.style.display = 'none'

    var close_sweet1 = window.document.getElementById('card_sweet')
    close_sweet1.style.display = 'none'
}
//fechar card big smoke
function exit_big(){
    var exit_page_big = window.document.getElementById('card_big')
    exit_page_big.style.display = "none"
}


//abrir card cj
function cj(){
    var new_page_cj = window.document.getElementById('card_cj')
    new_page_cj.style.display = 'flex'

    var close_sweet2 = window.document.getElementById('card_sweet')
     close_sweet2.style.display = 'none'

    var close_ryder2 = window.document.getElementById('card_ryder')
    close_ryder2.style.display = 'none'

    var close_big2 = window.document.getElementById('card_big')
    close_big2.style.display = 'none'

}
//fechar card cj
function exit_cj(){
    var exit_page_cj = window.document.getElementById('card_cj')
    exit_page_cj.style.display = "none"
}


//abrir card sweet
function sweet(){
    var new_page_sweet = window.document.getElementById('card_sweet')
    new_page_sweet.style.display = 'flex'

    var close_cj3 = window.document.getElementById('card_cj')
    close_cj3.style.display = 'none'

    var close_ryder3 = window.document.getElementById('card_ryder')
    close_ryder3.style.display = 'none'

    var close_big3 = window.document.getElementById('card_big')
    close_big3.style.display = 'none'
}
//fechar card sweet
function exit_sweet(){
    var exit_page_sweet = window.document.getElementById('card_sweet')
    exit_page_sweet.style.display = "none"
}