const URLgetAllHospedes = `http://localhost:3000/getAll`;
const URLgetQuartosDisponiveis = `http://localhost:3000/getQuartosDisponiveis`;
const URLpostNewHospede = `http://localhost:3000/addHospede`;
const URLdeleteHospedeByQuarto = `http://localhost:3000/deleteHospedeByQuarto`;

let res = document.getElementById("res");
let btn = document.getElementById("btn");
let btnHidden = document.getElementById("btnHidden");
let btnHiddenDelete = document.getElementById("btnHiddenDelete");
let btnLimpar = document.getElementById("limpar");

btn.addEventListener("click", resposta);
btnLimpar.addEventListener("click", limaparResposta);

btnHidden.addEventListener("click", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let cpf = document.getElementById("cpf").value;
  let quarto = document.getElementById("quarto").value;
  let data = document.getElementById("data").value;
  // console.log(name)

  let body = {
    name: name,
    age: age,
    cpf: cpf,
    quarto: quarto,
    dataDeEntrada: data,
  };

  postNewHospede(body);
});

async function deleteHospede(body) {
  let dados = body;
  const response = await fetch(URLdeleteHospedeByQuarto, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  const data = await response.json();
  console.log(data);
}

async function postNewHospede(body) {
  let dados = body;
  const response = await fetch(URLpostNewHospede, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  const data = await response.json();
  console.log(data);
}

async function getAll() {
  const response = await fetch(URLgetAllHospedes);

  const data = await response.json();

  if (response.status == 200) {
    console.log(data);
    data.map((obj) => {
      const div = document.createElement("div");
      const name = document.createElement("h2");
      const age = document.createElement("p");
      const quarto = document.createElement("p");
      const cpf = document.createElement("p");
      const dataDeEntrada = document.createElement("p");

      name.innerText = obj.name;
      age.innerHTML = `Idade: ${obj.age}`;
      quarto.innerText = `Quarto: ${obj.quarto}`;
      cpf.innerText = `CPF: ${obj.cpf}`;
      dataDeEntrada.innerText = `Data de Entarda: ${obj.dataDeEntrada}`;

      div.appendChild(name);
      div.appendChild(age);
      div.appendChild(quarto);
      div.appendChild(cpf);
      div.appendChild(dataDeEntrada);

      res.appendChild(div);
    });
  }
}

async function getQuartosDisponiveis() {
  const response = await fetch(URLgetQuartosDisponiveis);
  const data = await response.json();

  if (response.status == 200) {
    data.map((obj) => {
      const div = document.createElement("div");
      const num = document.createElement("h2");
      const disponivel = document.createElement("strong");

      num.innerText = `Quarto: ${obj.numero}`;
      disponivel.innerText = `Disponivel`;

      div.appendChild(num);
      div.appendChild(disponivel);

      res.appendChild(div);
    });
  }
}

function resposta() {
  let radio = document.getElementsByName("input");
  let radioValue;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      radioValue = radio[i].value;
    }
  }
  //   alert(radioValue);
  if (radioValue == 1) {
    getAll();
  } else if (radioValue == 2) {
    getQuartosDisponiveis();
  } else if (radioValue == 3) {
    let formHidden = document.getElementById("formHidden");

    formHidden.style.display = "block";

    btnHidden.addEventListener("click", function (event) {
      event.preventDefault();
      let name = document.getElementById("name").value;
      let age = document.getElementById("age").value;
      let cpf = document.getElementById("cpf").value;
      let quarto = document.getElementById("quarto").value;
      let data = document.getElementById("data").value;
      // console.log(name)

      let body = {
        name: name,
        age: age,
        cpf: cpf,
        quarto: quarto,
        dataDeEntrada: data,
      };

      postNewHospede(body);
    });
  } else {
    let formHiddenDelete = document.getElementById("formHiddenDelete");

    formHiddenDelete.style.display = "block";
    btnHiddenDelete.addEventListener("click", function (event) {
      event.preventDefault();
      let quarto = document.getElementById("quartoDelete").value;

      let body = {
        quarto: quarto,
      };

      deleteHospede(body);
    });
  }
}

function limaparResposta() {
  location.reload();
  window.location.href = "../public/index.html";
}
