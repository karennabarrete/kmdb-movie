const express = require("express");
const atracaoController = require("../controllers/atracaoController");

const routes = express.Router();

routes.get ("/atracoes", atracaoController.listarAtracoes);
