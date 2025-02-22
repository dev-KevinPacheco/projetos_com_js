
// craiçaõ das variaveis musicais
const on_sight = new Audio("audios/On_Sight.mp3");
const diario = new Audio("audios/Diário de um detento - Racionais Mcs.mp3");
const metalica = new Audio("audios/Iframe Master of Puppets (Remastered) [E0ozmU9cJDg].mp3");
const creedence= new Audio("audios/Iframe Creedence Clearwater Revival - Cotton Fields [ibWkp7OFB_A].mp3");
const kiss = new Audio("audios/Iframe Kiss - I Was Made For Lovin' You [ZhIsAZO5gl0].mp3");

//criação da playlist 
const array_musicas = [diario, on_sight, metalica, creedence, kiss];
let index_inicial = 0;

//função que atualiza capa principal
function atualizarCapaEInfo() {
  let capa = document.getElementById("capa");
  let fundo = document.body;

  if (index_inicial === 0) {
    capa.src = "img/capa.racionais.jpg";
    fundo.style.backgroundImage = "url('img/teste_capa.png')";
    document.getElementById("musica").innerHTML = "Diario de um detento";
    document.getElementById("cantor").innerHTML = "Racionais mc's";
  } else if (index_inicial === 1) {
    capa.src = "img/west.jpg";
    fundo.style.backgroundImage = "url('img/capa_west.png')";
    document.getElementById("musica").innerHTML = "On Sight";
    document.getElementById("cantor").innerHTML = "Kanye West";
  } else if (index_inicial === 2) {
    capa.src = "img/metalica.jpg";
    fundo.style.backgroundImage = "url('img/fundo_metalica.png')";
    document.getElementById("musica").innerHTML = "Master of Puppets";
    document.getElementById("cantor").innerHTML = "Metallica";
  } else if (index_inicial === 3) {
    capa.src = "img/creedence.jpg";
    fundo.style.backgroundImage = "url('img/fundo_creedence.png')";
    document.getElementById("musica").innerHTML = "Cotton Fields";
    document.getElementById("cantor").innerHTML = "Creedence Clearwater Revival";
  } else if (index_inicial === 4) {
    capa.src = "img/kiss.jpg";
    fundo.style.backgroundImage = "url('img/fundo_kiss.png')";
    document.getElementById("musica").innerHTML = "I Was Made For Lovin' You";
    document.getElementById("cantor").innerHTML = "Kiss";
  }
}

// Função para formatar o tempo no formato "minutos:segundos"
function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = Math.floor(segundos % 60);

  // Preenche com zero se o valor for menor que 10
  return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
}

// Atualizar a barra de progresso e o tempo decorrido
function atualizarBarraProgresso() {
  const musicaAtual = array_musicas[index_inicial];
  const duracao = musicaAtual.duration;
  
  if (!isNaN(duracao)) {
    // Calcular a porcentagem da música tocada
    const porcentagem = (musicaAtual.currentTime / duracao) * 100;
    
    // Atualizar a largura da div de progresso
    document.getElementById("progresso").style.width = `${porcentagem}%`;

    // Exibir o tempo decorrido
    document.getElementById("tempo").innerHTML = formatarTempo(musicaAtual.currentTime);
  }
}

// Função para atualizar a duração da música
function atualizarDuracao() {
  const musicaAtual = array_musicas[index_inicial];
  
  if (!isNaN(musicaAtual.duration)) {
    document.getElementById("duracao").innerHTML = formatarTempo(musicaAtual.duration);
  }
}

function tocar() {
  
  // Iniciar a música e atualizar a barra de progresso
  

  // Atualizar a barra de progresso a cada 100ms
  let intervalo = setInterval(function() {
    atualizarBarraProgresso();
    
    // Quando a música terminar, limpar o intervalo
    if (array_musicas[index_inicial].paused || array_musicas[index_inicial].ended) {
      clearInterval(intervalo);
    }
  }, 100); // Atualiza a barra a cada 100ms

  if (!array_musicas[index_inicial].paused) {
    array_musicas[index_inicial].pause();
    play_pause.src = "img/play.png";
} else {
    array_musicas[index_inicial].play();
    play_pause.src = "img/pausa.png";
}

}

//função proxima musica
function proxima() {
  array_musicas[index_inicial].pause();

  if (index_inicial < array_musicas.length - 1) {
    index_inicial++;
    array_musicas[index_inicial].play();
  }

  array_musicas[index_inicial].currentTime = 0;
  atualizarCapaEInfo();  // Atualiza a capa e informações da música
  atualizarDuracao();    // Atualiza a duração da música
  tocar();               // Começa a tocar a próxima música e inicia a barra de progresso
}

// função musica anterior
function anterior() {
  array_musicas[index_inicial].pause();

  if (index_inicial > 0) {
    index_inicial--;
    array_musicas[index_inicial].play();
  }

  array_musicas[index_inicial].currentTime = 0;
  atualizarCapaEInfo();  // Atualiza a capa e informações da música
  atualizarDuracao();    // Atualiza a duração da música
  tocar();               // Começa a tocar a música anterior e inicia a barra de progresso
}