const array_name = [];
const div_cadastrados = document.getElementById("cadastrados");
const main = document.getElementById("main");

const array_photo = [
    "img/player_1.jpg", "img/player_2.jpg", "img/player_3.jpg", "img/player_4.jpg",
    "img/player_5.jpg", "img/player_6.jpg", "img/player_7.jpg", "img/player_8.jpg",
    "img/player_9.jpg", "img/player_10.jpg", "img/player_11.jpg", "img/player_12.jpg",
    "img/player_13.jpg", "img/player_14.jpg", "img/player_15.jpg", "img/player_16.jpg",
    "img/player_17.jpg", "img/player_18.jpg", "img/player_19.jpg", "img/player_20.jpg"
];

const team_A = [];
const team_B = [];
const team_C = [];

let TwT = document.getElementById("two_teams");
let ThT = document.getElementById("three_teams");

let historico_seleção = [];

const results = document.getElementById("results");

// ----------------------------------------------------------
// FUNÇÃO DE CADASTRO
// ----------------------------------------------------------
function get_name() {
    let input = document.getElementById("get_name");
    let val = input.value;

    if (val.length < 3) {
        alert("ERRO: nome muito curto !!");
        return false;
    }

    // Verifica se duas equipes foram selecionadas e há 16 jogadores
    const duasEquipesSelecionadas = historico_seleção.includes(callback_two_teams);
    if (duasEquipesSelecionadas && array_name.length >= 16) {
        alert("Limite de 16 jogadores atingido para duas equipes.");
        return;
    }

    // Verifica limite geral de 20 jogadores
    if (array_name.length == 20) {
        alert("Você atingiu o número máximo de jogadores cadastrados");
        input.disabled = true;
        return;
    }

    const new_cadastrado = document.createElement("div");

    const photo = document.createElement("img");
    photo.src = array_photo[0];
    new_cadastrado.appendChild(photo);
    array_photo.shift();

    const nickname = document.createElement("p");
    nickname.textContent = val;
    new_cadastrado.appendChild(nickname);

    document.getElementById("all_players").appendChild(new_cadastrado);
    array_name.push(new_cadastrado);

    input.value = "";
    input.focus();
}

// ----------------------------------------------------------
// FUNÇÕES DE EXIBIÇÃO
// ----------------------------------------------------------
function show_names() {
    div_cadastrados.style.display = "block";
    main.style.display = "none";
}

function fechar_div() {
    div_cadastrados.style.display = "none";
    main.style.display = "block";
}

// ----------------------------------------------------------
// DUAS EQUIPES
// ----------------------------------------------------------
function creat_two_teams() {
    TwT.style.backgroundColor = "#ff0000b0";
    let color = window.getComputedStyle(TwT).backgroundColor;

    if (color === "rgba(255, 0, 0, 0.69)") {
        ThT.style.backgroundColor = "#353535";
    }

    let two_T = callback_two_teams;
    historico_seleção.push(two_T);
}

// ----------------------------------------------------------
// TRÊS EQUIPES
// ----------------------------------------------------------
function creat_three_teams() {
    ThT.style.backgroundColor = "#ff0000b0";
    let color = window.getComputedStyle(ThT).backgroundColor;

    if (color === "rgba(255, 0, 0, 0.69)") {
        TwT.style.backgroundColor = "#353535";
    }

    let three_T = callback_three_teams;
    historico_seleção.push(three_T);
}

// ----------------------------------------------------------
// FINALIZAR
// ----------------------------------------------------------
function finalizar(callback) {
    if (array_name.length < 5) {
        alert("Número de jogadores insuficiente");
        return;
    }

    callback(array_name);

    main.style.display = "none";
    results.style.display = "flex";
}

function fechar_view() {
    results.style.display = "none";
    main.style.display = "block";
    location.reload();
}

// ----------------------------------------------------------
// CALLBACK PARA DUAS EQUIPES
// ----------------------------------------------------------
function callback_two_teams(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    for (let k = 0; k < array.length; k++) {
        if (k % 2 === 0) {
            team_A.push(array[k]);
        } else {
            team_B.push(array[k]);
        }
    }

    const group_A = document.createElement("div");
    const group_B = document.createElement("div");

    const Alfa = document.createElement("p");
    Alfa.textContent = "Alfa";
    Alfa.style.color = 'white'

    const Bravo = document.createElement("p");
    Bravo.textContent = "Bravo";
    Bravo.style.color = 'white'

    group_A.appendChild(Alfa);
    group_B.appendChild(Bravo);

    results.appendChild(group_A);
    results.appendChild(group_B);

    team_A.forEach(div => group_A.appendChild(div));
    team_B.forEach(div => group_B.appendChild(div));

    return { team_A, team_B };
}

// ----------------------------------------------------------
// CALLBACK PARA TRÊS EQUIPES
// ----------------------------------------------------------
function callback_three_teams(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    for (let k = 0; k < array.length; k++) {
        if (k % 3 === 0) {
            team_A.push(array[k]);
        } else if (k % 3 === 1) {
            team_B.push(array[k]);
        } else {
            team_C.push(array[k]);
        }
    }

    const group_A = document.createElement("div");
    const group_B = document.createElement("div");
    const group_C = document.createElement("div");

    const Alfa = document.createElement("p");
    Alfa.textContent = "Alfa";
    Alfa.style.color = 'white'

    const Bravo = document.createElement("p");
    Bravo.textContent = "Bravo";
    Bravo.style.color = 'white'

    const Delta = document.createElement("p");
    Delta.textContent = "Delta";
    Delta.style.color = 'white'

    group_A.appendChild(Alfa);
    group_B.appendChild(Bravo);
    group_C.appendChild(Delta);

    results.appendChild(group_A);
    results.appendChild(group_B);
    results.appendChild(group_C);

    team_A.forEach(div => group_A.appendChild(div));
    team_B.forEach(div => group_B.appendChild(div));
    team_C.forEach(div => group_C.appendChild(div));

    return { team_A, team_B, team_C };
}
