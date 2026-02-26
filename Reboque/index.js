
// ============================================
//     COMANDO PARA ABRIR QUICK SEARCH
// ===========================================


const display_quick_search = document.getElementById('Quick_search_block');
const butt_menu_quickSerch = document.getElementById("Quick_search");
const main_display = document.getElementById("block_logo");

butt_menu_quickSerch.addEventListener('click', function(){
  display_quick_search.style.display = 'block';
    main_display.style.display = 'none';
      display_call_tow.style.display = 'none'
        display_Final_report.style.display = 'none'

    setTimeout(() => {
    map.invalidateSize();
  }, 200);

});


// ============================================
// COMANDO PARA ABRIR A TELA CALL TOW
// ===========================================


const display_call_tow = document.getElementById("call_tow_block");
const butt_menu_calltow = document.getElementById("Call_tow");

butt_menu_calltow.addEventListener('click', function(){
    display_call_tow.style.display = 'block';
      main_display.style.display = 'none';
        display_quick_search.style.display = 'none';
          display_Final_report.style.display = 'none'
            display_activity_history.style.display = 'none'
              butt_form.style.display = 'block';


  form.reset(); // LIMPA OS CAMPOS DO FORMULARIO DE CADSTRO



      const inputs = document.querySelectorAll(".form_input");
      inputs.forEach(input => {  // FAZ A LIBERAÇÃO PARA A EDIÇÃO DO FORMULARIO DE CADASTRO
        input.readOnly = false;
      })
});


// ============================================
// COMANDO PARA ABRIR A TELA ACTIVITY HISTORY
// ===========================================


const display_activity_history = document.getElementById("Activity_history_block");
const butt_menu_activityHistory = document.getElementById("Activity_history");

butt_menu_activityHistory.addEventListener("click", function(){
    display_call_tow.style.display = 'none';
      main_display.style.display = 'none';
        display_quick_search.style.display = 'none'
          display_Final_report.style.display = 'none'
            display_activity_history.style.display = 'flex'
  
});


// ============================================
// COMANDO PARA ABRIR A TELA FINAL REPORT
// ===========================================


const display_Final_report = document.getElementById("Final_report_block");
const butt_menu_final_report = document.getElementById("Final_report");

butt_menu_final_report.addEventListener('click', function(){
    display_call_tow.style.display = 'none';
      main_display.style.display = 'none';
        display_quick_search.style.display = 'none';
          display_activity_history.style.display = 'none';
            display_Final_report.style.display = 'flex';
})





// ==============================
// BOTÃO E BLOCO DE RESPOSTA
// ==============================

const result_distancia = document.getElementById("butt_calcular");
result_distancia.addEventListener("click", buscar_distancia);


const bloco_resposta = document.getElementById("resultado_pesquisa");
const quilometragem = document.getElementById("quilometragem");
const tempo = document.getElementById("tempo");

// ==============================
// ENDEREÇO FIXO (ORIGEM) E RESULTADA DA FUNC CALCULAR_DISTANCIA
// ==============================
const Address_firma = {
  lat: -3.8339293731006583,
  lon: -38.56276576861093
};


const resultado_final = {
  km: null,
  minutos: null
}; 


// ==============================
// MAPA (LEAFLET)
// ==============================
const map = L.map("map").setView([-3.90, -38.45], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

// força ajuste de tamanho
setTimeout(() => {
  map.invalidateSize();
}, 200);

// ==============================
// CAMADAS GLOBAIS (para limpar depois)
// ==============================
let rotaLayer;
let markerOrigem;
let markerDestino;

// ==============================
// FUNÇÃO: CALCULAR DISTÂNCIA + DESENHAR ROTA
// ==============================
async function calcular_distancia(p1, p2, resultado_final) {
  const url = `https://router.project-osrm.org/route/v1/driving/${p1.lon},${p1.lat};${p2.lon},${p2.lat}?overview=full&geometries=geojson`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.routes || data.routes.length === 0) {
      alert("Rota não encontrada");
      return null;
    }

    const rota = data.routes[0].geometry;

    // remove rota antiga
    if (rotaLayer) map.removeLayer(rotaLayer);
    if (markerOrigem) map.removeLayer(markerOrigem);
    if (markerDestino) map.removeLayer(markerDestino);

    // marcador origem
    markerOrigem = L.marker([p1.lat, p1.lon])
      .addTo(map)
      .bindPopup("Origem")
      .openPopup();

    // marcador destino
    markerDestino = L.marker([p2.lat, p2.lon])
      .addTo(map)
      .bindPopup("Destino");

    // desenha rota
    rotaLayer = L.geoJSON(rota, {
      style: {
        color: "blue",
        weight: 5
      }
    }).addTo(map);

    // ajusta zoom para mostrar tudo
    map.fitBounds(rotaLayer.getBounds());

    const distancia_metros = data.routes[0].distance;
    const tempo_segundos = data.routes[0].duration;

    resultado_final.km = (distancia_metros/1000).toFixed(2);
    resultado_final.minutos = Math.round(tempo_segundos/60);

  } catch (err) {
    console.error("Erro no OSRM:", err);
    return null;
  }
}

// ==============================
// FUNÇÃO: BUSCAR ENDEREÇO (NOMINATIM) - APLICADA NO QUICK SEARCH   
// ==============================

async function buscar_distancia() {
  const locationInput = document.getElementById("location");
  const location = locationInput.value;

  if (!location) {
    alert("Digite um endereço");
    return;
  }

  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.length === 0) {
      alert("Endereço não encontrado");
      return;
    }

    const Address_final = {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon)
    };

    locationInput.value = "";

    const resultado = await calcular_distancia(Address_firma, Address_final, resultado_final);

   
      quilometragem.innerText = `Distancia em KM : ${resultado_final.km} Km`;
      tempo.innerText = `Tempo Estimado em Minutos : ${resultado_final.minutos} Min`;
      bloco_resposta.style.display = 'block'
    

  } catch (erro) {
    console.error("Erro no Nominatim:", erro);
  }
}

// ==============================
// FUNÇÃO: BUSCAR ENDEREÇO (NOMINATIM) - APLICADA NO FORMULARIO DE DACASTRO
// ==============================

async function buscar_distancia_obj(address_A, address_B) {

  if (!address_A) {
    alert("Digite um endereço");
    return;
  }else if(!address_B){
    alert("Digite um endereço");
    return;
  }

  try {
    const url_A = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address_A)}`;
    const res_A = await fetch(url_A);
    const data_A = await res_A.json();


    const url_B = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address_B)}`;
    const res_B = await fetch(url_B);
    const data_B = await res_B.json();

    if (data_A.length === 0) {
      alert("Endereço não encontrado");
      return;
    }

    if (data_B.length === 0) {
      alert("Endereço não encontrado");
      return;
    }

    const Address_final_A = {
      lat: parseFloat(data_A[0].lat),
      lon: parseFloat(data_A[0].lon)
    };

    const Address_final_B = {
        lat: parseFloat(data_B[0].lat),
        lon: parseFloat(data_B[0].lon)
    }


    const distancia = await calcular_distancia_obj(Address_final_A,Address_final_B);

    return distancia

  } catch (erro) {
    console.error("Erro no Nominatim:", erro);
    return{km:0, metros: 0};
    }
  }


// ==============================
// FUNÇÃO: CALCULAR DISTÂNCIA - APLICADA AO FORMULARIO DE CADASTRO
// ==============================


async function calcular_distancia_obj(point_A, point_B) {
  const url = `https://router.project-osrm.org/route/v1/driving/${point_A.lon},${point_A.lat};${point_B.lon},${point_B.lat}?overview=full&geometries=geojson`;

    try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.routes || data.routes.length === 0) {
      alert("Rota não encontrada");
      return null;
    }

    return {
  km: Number((data.routes[0].distance / 1000).toFixed(2)),
  metros: data.routes[0].distance
};

}catch(erro){
    console.error("Erro no OSRM:", erro);
    return {km:0,metros:0}
}
}


//============================
//     SCRIPT CALL TOW
//===========================

const bancoDeDados = [];

const form = document.getElementById("form_callTow");

   async function novo_registro(){

    const collectionLocation = document.getElementById("collection_location_id").value;
    const deliveryLocation = document.getElementById("delivery_location_id").value;

    const distance = await buscar_distancia_obj(collectionLocation,deliveryLocation)

    return{
      phoneNumber : document.getElementById("phone_number_id").value,
      email : document.getElementById("Email_id").value,
      fullName : document.getElementById("full_name_id").value,
      licensePlate : document.getElementById("license_plate_id").value,
      brandModel : document.getElementById("brand_model_id").value,
      year : document.getElementById("year_id").value,
      collectionLocation,
      deliveryLocation,
      collectionTime : document.getElementById("collection_time_id").value, 
      deliveryTime : document.getElementById("delivery_time_id").value,
      amountToPay: document.getElementById("amount_to_pay_id").value,
      paymentMethod : document.getElementById("payment_method_id").value,
      observation: document.getElementById("observation_id").value,
      DistanceTraveled : distance
    } 
  };



form.addEventListener('submit', async(e) => {

  e.preventDefault();

  const registro = await novo_registro();

    if (!registro) {
    console.log("Registro inválido.");
    return;
  }

  bancoDeDados.push(registro);

  atualizar_tabela();

  form.reset();

  const inputs = document.querySelectorAll(".form_input");
      inputs.forEach(input => {
        input.readOnly = false;
      })


} )



// ============================
//     SCRIPT ACTIVITY HISTORY
// ===========================

function atualizar_tabela(){

  const regi = document.getElementById("regi")
  regi.innerHTML = "";

  bancoDeDados.forEach((registro,index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td><i class="fa-solid fa-pen" data-id="${index}" ></i></td>
    <td>${registro.licensePlate}</td>
    <td>${registro.brandModel}</td>
    <td>${registro.fullName}</td>
    <td>${registro.collectionLocation}</td>
      `

      regi.appendChild(tr);
  })


    const registros = document.querySelectorAll(".fa-pen");

    registros.forEach(reg => {
      reg.addEventListener("click", e =>{
        const id = e.target.dataset.id;
        show_information(bancoDeDados[id])
      })
    })

}

const butt_form = document.getElementById("form_submit");

function show_information(id){
  display_call_tow.style.display = 'block';

  display_activity_history.style.display = 'none';

  butt_form.style.display = 'none';

      document.getElementById("phone_number_id").value = id.phoneNumber;
      document.getElementById("Email_id").value = id.email;
      document.getElementById("full_name_id").value = id.fullName;
      document.getElementById("license_plate_id").value = id.licensePlate;
      document.getElementById("brand_model_id").value = id.brandModel;
      document.getElementById("year_id").value = id.year;
      document.getElementById("collection_location_id").value = id.collectionLocation;
      document.getElementById("delivery_location_id").value = id.deliveryLocation;
      document.getElementById("collection_time_id").value = id.collectionTime;
      document.getElementById("delivery_time_id").value = id.deliveryTime;
      document.getElementById("amount_to_pay_id").value = id.amountToPay;
      document.getElementById("payment_method_id").value = id.paymentMethod;
      document.getElementById("observation_id").value = id.observation;

      const inputs = document.querySelectorAll(".form_input");
      inputs.forEach(input => {
        input.readOnly = true;
      })


};

// ============================
//     SCRIPT FINAL REPORT
// ===========================

const search = document.getElementById("Search-date");

search.addEventListener('click', function(){

  const First = document.getElementById("First-date_id").value;
  const Last = document.getElementById("Last-date_id").value;

  const firstDate = new Date(First);
  const lastDate = new Date(Last);

  lastDate.setDate(lastDate.getDate() + 1);

  const newQuery =[];

  for(let i = 0; i < bancoDeDados.length; i++){

    const collectionDate = new Date(bancoDeDados[i].collectionTime);

    if(collectionDate >= firstDate && collectionDate < lastDate){
      newQuery.push(bancoDeDados[i]);
    }else{"nenhum econtrado"}
  }

  
const regi = document.getElementById("regi_Act")
  regi.innerHTML = "";

  newQuery.forEach((registro,index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td><i class="fa-solid fa-pen" data-id="${index}" ></i></td>
    <td>${registro.licensePlate}</td>
    <td>${registro.brandModel}</td>
    <td>${registro.fullName}</td>
    <td>${registro.collectionLocation}</td>
      `

      regi.appendChild(tr);
  })

      const registros = document.querySelectorAll(".fa-pen");

    registros.forEach(reg => {
      reg.addEventListener("click", e =>{
        const id = e.target.dataset.id;
        show_information(newQuery[id])
      })
    })


      let Distance_traveled = 0;
      let revenue = 0;

    for(let i = 0; i < newQuery.length; i++ ){

      Distance_traveled += newQuery[i].DistanceTraveled.km; 
      revenue += Number(newQuery[i].amountToPay);
    }

  const regi_final = document.getElementById("regi_Fin")
  regi_final.innerHTML = "";

    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${Distance_traveled} ${'km'}</td>
    <td>${revenue} ${"R$"}</td>
      `

      regi_final.appendChild(tr);
  

  const down = document.getElementById("down");
  down.style.display = 'block';

})