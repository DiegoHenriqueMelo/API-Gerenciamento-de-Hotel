import express from "express";
import cors from "cors";
import * as controllerHospedes from "../controller/controllerHospedes.js";
import { hospedes } from "../data/hospedes.js";
import { quartos } from "../data/quartos.js";
import * as Routes from "../routes/routes.js";

const app = express();

export let startServer = () => {
  app.use(cors());
  app.use(express.json());
  app.listen(3000, () => {
    console.log("SERVIDOR INICIADO");
  });

  app.get(Routes.getAll, (req, res) => {
    controllerHospedes.verificateHospedes();
    if (controllerHospedes.verificate == true) {
      res.status(200).json(hospedes);
      console.log("GET REALIZADO COM SUCESSO!");
    } else {
      res.json("ERROR[] não existem pessoas hospedadas");
    }
  });

  app.get(Routes.getQuartosDisponiveis, (req, res) => {
    let quartosDisponiveis = false;
    quartosDisponiveis = quartos.filter((quarto) => quarto.disponivel == true);

    if (!quartos[0]) {
      res.status(500).json("ERROR[] NÃO foi efetuar comando!");
    } else if (quartosDisponiveis == false) {
      res.status(200).json("Não existem quartos disponiveis");
    } else {
      res.status(200).json(quartosDisponiveis);
    }
  });

  app.post(Routes.postHospede, (req, res) => {
    const newPessoa = req.body;
    controllerHospedes.verificateHospedesNewHospede(newPessoa);
    if (controllerHospedes.verificarPessoa === true) {
      hospedes.push(newPessoa);
      res.status(200).json(hospedes);
      console.log("PESSOA CADASTRADA");
    } else {
      res.json("ERROR[] NÃO foi possivel cadastrar usuario!");
    }
  });

  app.delete(Routes.deleteHospedeByQuarto, (req, res) => {
    const { quarto } = req.params;

    controllerHospedes.deleteHospede(quarto);
    if (controllerHospedes.verificarQuarto == true) {
      res.status(200).json(hospedes);
    } else {
      res.json("ERROR[] NÃO foi possivel remover usuario!");
    }
  });
};
