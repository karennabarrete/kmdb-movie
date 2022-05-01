const express = require("express");
const atracaoController = require("../controllers/atracaoController");

const routes = express.Router();

routes.get ("/atracoes", atracaoController.listarAtracoes);
routes.get ("/favoritos", atracaoController.listarFavoritos);
routes.post ("/favoritos", atracaoController.criarFavoritos);
routes.put ("/favoritos", atracaoController.updateFavoritos);
routes.delete ("/favoritos", atracaoController.deleteFavoritos);


module.exports = routes;