import express from "express";
import { hospedes } from "../data/hospedes.js";
import { quartos } from "../data/quartos.js";

const app = express();
export let verificate = false;
export let verificarPessoa;
export let verificarQuarto = false;

export let verificateHospedes = () => {
  if (hospedes[0]) {
    verificate = true;
  }
};

export let verificateHospedesNewHospede = (pessoaReq) => {
  verificarPessoa = true;

  let cpf = pessoaReq.cpf.split("");
  let digitiosVerificadores;
  let digito1 = 0;
  let digito2 = 0;

  let date = pessoaReq.dataDeEntraga.split("");
  for (let i = 0; i < cpf.length; i++) {
    if (cpf[i] == "-" || cpf[i] == ".") {
      cpf.splice(i, 1);
    }
  }
  if (cpf.length != 11) {
    verificarPessoa = false;
  } else {
    digitiosVerificadores = [Number(cpf[9]), Number(cpf[10])];

    for (let i = 0; i < 9; i++) {
      digito1 += (10 - i) * Number(cpf[i]);
      digito2 += (11 - i) * Number(cpf[i]);
    }

    digito1 = (digito1 * 10) % 11;
    if (digito1 === 10) {
      digito1 = 0;
    }

    digito2 = ((digito2 + digito1 * 2) * 10) % 11;
    if (digito2 === 10) {
      digito2 = 0;
    }

    if (
      digito1 != digitiosVerificadores[0] ||
      digito2 != digitiosVerificadores[1]
    ) {
      verificarPessoa = false;
    }

    for (let i = 0; i < hospedes.length; i++) {
      if (hospedes[i].cpf == pessoaReq.cpf) {
        verificarPessoa = false;
      }
    }
  }

  if (
    date[2] != "-" ||
    date[5] != "-" ||
    pessoaReq.dataDeEntraga.length != 10
  ) {
    verificarPessoa = false;
  }

  quartos.forEach((quarto) => {
    if (quarto.numero == pessoaReq.quarto) {
      if (quarto.disponivel == false) {
        verificarPessoa = false;
      }
    }
  });
};

export let deleteHospede = (quartoReq) => {
  let numQuarto = parseInt(quartoReq);
  for (let i = 0; i < hospedes.length; i++) {
    if (hospedes[i].quarto == numQuarto) {
      hospedes.splice(i, 1);
      verificarQuarto = true;
    }
  }
  quartos.forEach((quarto) => {
    if (quarto.numero == numQuarto) {
      quarto.disponivel = true;
    }
  });
};
