const express = require("express");
const atracaoController = require("../controllers/atracaoController");
const usuarioController = require("../controllers/usuarioController");

const routes = express.Router();

routes.get ("/atracoes", atracaoController.listarAtracoes);
routes.get ("/favoritos", atracaoController.listarFavoritos);
routes.post ("/favoritos", atracaoController.criarFavoritos);
routes.put ("/favoritos", atracaoController.updateFavoritos);
routes.delete ("/favoritos", atracaoController.deleteFavoritos);

routes.get ("/usuario", usuarioController.listarUsuario);
routes.post ("/usuario", usuarioController.criarUsuario);
routes.put ("/usuario", usuarioController.updateUsuario);
routes.delete ("/usuario", usuarioController.deleteUsuario);


module.exports = routes;