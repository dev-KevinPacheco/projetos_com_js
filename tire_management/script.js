


const cadastro = document.getElementById("cadastro");
const main_cadastro = document.getElementById("main_cadastro");
const main = document.getElementById("main")

cadastro.addEventListener('click', () => {
    main.style.display = 'none';
    main_cadastro.style.display = 'block';
});

const close_main_cadastro = document.getElementById("close_main_cadastro");
close_main_cadastro.addEventListener('click', () => {
    main.style.display = 'flex';
    main_cadastro.style.display = 'none';
});

const main_estoque = document.getElementById("main_estoque");
const estoque = document.getElementById("estoque").addEventListener('click' , () => {
    main_estoque.style.display = 'block';
    main.style.display = 'none'
})


const close_main_estoque = document.getElementById("close_main_estoque");
close_main_estoque.addEventListener("click" , () => {
    main_estoque.style.display = 'none';
    main.style.display = 'flex';
})


// --------------------------------------------------------------------------------------
//                 SCRIPT PARA LOGICA DE CADASTRO DE PNEUS
// --------------------------------------------------------------------------------------                

const banco = [];

        const cadastrar = document.getElementById("cadastrar");
        cadastrar.addEventListener('click', (event) => {
            event.preventDefault();

            const novo_obj = new_obj();
            save(novo_obj);

            AddEstoque(novo_obj)
            

            document.getElementById("form").reset()
        })

        function new_obj () {
            return{
                 data_compra : document.getElementById("get_data").value,
                    Qtd_compra : document.getElementById("get_qtd").value,
                    dot : document.getElementById("get_DOT").value,
                    marca_fabri : document.getElementById("get_marca_fabricante").value,
                    modelo : document.getElementById("get_modelo").value,
                    estado : document.getElementById("get_estado").value,
                    medidas : document.getElementById("get_medidas").value,
                    band_rolage : document.getElementById("get_band_rodagem").value,
                    capacidade : document.getElementById("get_capacidade_carga").value,
                    profundidade : document.getElementById("get_profundidade").value,
                    info : document.getElementById("get_info").value
            }
        }

        function save(obj){
            banco.push(obj);
        }


// --------------------------------------------------------------------------------------
//                 SCRIPT PARA LOGICA DE ESTOQUE
// --------------------------------------------------------------------------------------          


    const tbody = document.getElementById("body_table");

    function AddEstoque (obj){
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${obj.data_compra}</td>
        <td>${obj.marca_fabri}</td>
        <td>${obj.dot}</td>
        <td>${obj.modelo}</td>
        <td>${obj.estado}</td>
        <td>${obj.medidas}</td>
        <td>${obj.profundidade}</td>
        <td>${obj.band_rolage}</td>
        <td>${obj.capacidade}</td>
        <td>${obj.Qtd_compra}</td>
        `;

        tbody.appendChild(tr);
    }

    // --------------------------------------------------------------------------------------
//                 SCRIPT PARA LOGICA DA MONTAGEM
// --------------------------------------------------------------------------------------

const main_montagem = document.getElementById('main_montagem');
const close_main_montagem = document.getElementById("close_main_montagem");
const montagem = document.getElementById('montagem');

close_main_montagem.addEventListener('click', () => {
    main_montagem.style.display = 'none';
    main.style.display = 'flex'
    const form_montagem = document.getElementById("form_montagem").reset();

})

montagem.addEventListener('click', () => {
    main.style.display = 'none'
    main_montagem.style.display = 'block'
    finalizar_montagem.style.display ='block'
    document
        .querySelectorAll("#main_montagem input")
        .forEach(input => input.readOnly = false);

});


function new_obj_2(){
    return{
        veiculo: document.getElementById("get_veiculo").value,
        posicao_colocada: document.getElementById("get_posicao_colocado").value,
        data_troca: document.getElementById("get_data_troca").value,
        mecanico: document.getElementById("get_mecanico").value,
        dot_colocado: document.getElementById("get_DOT_colocado").value,
        estado_colocado: document.getElementById("get_estado_montagem").value,
        band_rodagem: document.getElementById("get_band_rodagem_montagem").value,
        capacidade_colocado: document.getElementById("get_capacidade_carga_montagem").value,
        profundidade_colocado: document.getElementById("get_profundidade_montagem").value,
        posicao_retirado: document.getElementById("get_posicao_retirado").value,
        dot_retirado: document.getElementById("get_DOT_retirado").value,
        profundidade_retirado: document.getElementById("get_profundidade_retirado").value,
        motivo: document.getElementById("get_motivo").value
    }
}
    const banco_montagem =[];

    function save_montagem(obj){
        banco_montagem.push(obj)
    }

function busca_dot(){

  const dot_input = document.getElementById('get_DOT_colocado').value.trim().toLowerCase();
const find_dot = banco.find(p => p.dot.toLowerCase().trim() === dot_input);


    if(!find_dot){
        alert(" ERRO : REFERENCIA NÃO ENCONTRADA. VERIFIQUE O ESTOQUE !");
        return;
    }


    if(find_dot){
  
        document.getElementById('get_estado_montagem').value = find_dot.estado;
        document.getElementById('get_band_rodagem_montagem').value = find_dot.band_rolage;
        document.getElementById('get_capacidade_carga_montagem').value = find_dot.capacidade;
        document.getElementById('get_profundidade_montagem').value = find_dot.profundidade;
    }

    if(find_dot.Qtd_compra < 0){
        alert("ERRO: VERIFIQUE O ESTOQUE !!")
    }else{
        find_dot.Qtd_compra -= 1;

        tbody.innerHTML = ''

        banco.forEach(obj => {AddEstoque(obj)})
    }

}

const finalizar_montagem = document.getElementById("enviar_form_montagem");

finalizar_montagem.addEventListener('click', (event) => {
    event.preventDefault();

    const novo_obj_montagem = new_obj_2();

    save_montagem(novo_obj_montagem);

    AddEhistorico(novo_obj_montagem);

    const form_montagem = document.getElementById("form_montagem").reset();
})



    // --------------------------------------------------------------------------------------
//                 SCRIPT PARA LOGICA DO HISTORICO
// --------------------------------------------------------------------------------------


const main_historico = document.getElementById("main_hi");

const close_main_historico = document.getElementById("close_main_historico");

const historico = document.getElementById("historico");

historico.addEventListener('click', () => {
    console.log("aparee histroico")
    main.style.display = 'none';
    main_historico.style.display = 'block';
})

close_main_historico.addEventListener('click', () => {
    main.style.display = 'flex';
    main_historico.style.display = 'none';
})


 const tbody_historico = document.getElementById("body_table_historico");

    function AddEhistorico (obj){
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td><i class="fa-solid fa-magnifying-glass" data-id="${obj.dot_colocado}"></i></td>
        <td>${obj.veiculo}</td>
        <td>${obj.data_troca}</td>
        <td>${obj.posicao_colocada}</td>
        <td>${obj.mecanico}</td>
        `;

        tbody_historico.appendChild(tr);


        const icon = tr.querySelector(".fa-magnifying-glass");

    icon.addEventListener("click", () => {
        const id = icon.dataset.id;
        mostrarMaisInformacoes(id);  
    });
    }



    function mostrarMaisInformacoes(id) {
    const obj = banco_montagem.find(item => item.dot_colocado === id);


        main_montagem.style.display = 'block';

        finalizar_montagem.style.display ='none'


        document.getElementById("get_veiculo").value = obj.veiculo;
        document.getElementById("get_posicao_colocado").value = obj.posicao_colocada;
        document.getElementById("get_data_troca").value = obj.data_troca;
        document.getElementById("get_mecanico").value = obj.mecanico;
        document.getElementById("get_DOT_colocado").value = obj.dot_colocado;
        document.getElementById("get_estado_montagem").value = obj.estado_colocado;
        document.getElementById("get_band_rodagem_montagem").value = obj.band_rodagem;
        document.getElementById("get_capacidade_carga_montagem").value = obj.capacidade_colocado;
        document.getElementById("get_profundidade_montagem").value = obj.profundidade_colocado;
        document.getElementById("get_posicao_retirado").value = obj.posicao_retirado;
        document.getElementById("get_DOT_retirado").value = obj.dot_retirado;
        document.getElementById("get_profundidade_retirado").value = obj.profundidade_retirado;
        document.getElementById("get_motivo").value = obj.motivo;


         document
        .querySelectorAll("#main_montagem input")
        .forEach(input => input.readOnly = true);




    }

// DEIXO ESSA MENSAGEM PARA TE DIZER QUE NÃO DESISTA DOS SEUS SONHOS. MESMO COM ALTOS E BAIXOS NA VIDA, SEMPRE EXISTIRAR UM AMANHÃ.
// Ass: kevin pacheco de brito